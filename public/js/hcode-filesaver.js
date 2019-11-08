HTMLFormElement.prototype.save = function(){

    let form = this;

    form.addEventListener('submit', e => {


        e.preventDefault();
        let formData = new FormData(form);
    
        fetch(form.action, {
          method: form.method,
          body: formData
    
        }).then(response => response.json())
          .then(json => {
    
            console.log('JSON', json);
          });
    
});

}