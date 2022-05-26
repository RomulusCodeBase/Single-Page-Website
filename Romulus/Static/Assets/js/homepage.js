document.addEventListener('alpine:init', () => {
    Alpine.data('homepage', () => ({
        ContentBlocks: [

        ],
        ScrollToContent(){
            var content = document.getElementById("contents-container");
            content.scrollIntoView();
        },
        RenderComponents(){
            axios.all([
                axios.get('/Assets/data/contents.json'), 
                axios.get('/Assets/data/contents-1.json')
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
        }
    }))
})