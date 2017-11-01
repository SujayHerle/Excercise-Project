
var Input = (function() {
    //store classes in an object
    var DOMStrings = {
        inputType: '.Submit',
        inputDesc: '.add__description'
    };
    return {
        getInput: function(){
            return {

                    description: document.querySelector(DOMStrings.inputDesc).value


                   };
        },

        convertItem: function(desc){
          var html,newHTML;
          element = DOMStrings.inputType;
          console.log("dsdasdsa");
          //html = ''
          //newHTML=html.replace('%description%',desc.toUpperCase());

          document.querySelector('.upper').innerHTML=desc.toUpperCase();
          //document.getElementById('result').parentNode.removeChild;

        },

        clearFields: function(){
          console.log('ds');
          document.querySelector('.upper').innerHTML='';
          //var el =
        //  var el=document.getElementById('result').remove;
        //el.outerHTML='';
        //console.log(el);
        //el.remove;
         //el[0].parentNode.removeChild(el[0]);
        },

        getDOMStrings: function(){
                   return DOMStrings;
                   }
      };

})();

var controller = (function(Input){
    //set up event listner
    var setUpEvntListner = function(){
        var DOM = Input.getDOMStrings();
        document.querySelector(DOM.inputType).addEventListener('click', ctrlAddItem);
        document.addEventListener('keypress', function(event){
                if(event.keyCode === 13 || event.which === 13){
                    ctrlAddItem();
                    }
            });
          }
            var ctrlAddItem = function(){

                  Input.clearFields();
                    var input,newItem;
                    console.log("sds");
                    // Input field
                    input = Input.getInput();

                    if(input.description !== ""){
                    Input.convertItem(input.description);

                    };

                    //console.log(input);
                };
    return{
        init: function(){

            setUpEvntListner();
        }
    };


})(Input);

controller.init();
