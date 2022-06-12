document.addEventListener('alpine:init', () => {
    Alpine.data('homepage', () => ({
        ContentBlocks: [

        ],
        ShowMenu: false,
        ScrollToContent(){
            var content = document.getElementById("contents-container");
            content.scrollIntoView();
        },
        RenderComponents(){
            axios.all([
                await axios.get('/Assets/data/contents.json'), 
                await axios.get('/Assets/data/contents-1.json')
              ])
              .then(axios.spread((ResponseOne, ResponseTwo) => {
                var converter = new showdown.Converter();    
                this.ContentBlocks.push(ResponseOne);
                this.ContentBlocks.push(ResponseTwo);  
                for(Panel in this.ContentBlocks[1].data.PanelList){
                    var MarkdownTarget =  this.ContentBlocks[1].data.PanelList[Panel].PanelText;
                    var RevisedHtml = converter.makeHtml(MarkdownTarget);
                    this.ContentBlocks[1].data.PanelList[Panel].PanelText = RevisedHtml;
                }
            }));
        },
        ToggleMenu(x){
            var menu = document.getElementById("menu");
            var mainMenu = document.getElementById("main-menu");
            menu.classList.toggle("change");
            mainMenu.classList.toggle("hidden");
            document.body.classList.toggle("overflow-hidden")
        }
    }))
})