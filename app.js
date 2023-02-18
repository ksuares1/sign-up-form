const inputs = document.getElementsByTagName("input");


function information(){
  for(let i=0; i<inputs.length; i++){
    inputs[i].addEventListener('click', function () {
            const error = document.getElementsByClassName('error');
            const errorIcon = document.getElementsByClassName('error-icon');
    });
            if (!this.value) {
                this.classList.add('invalid');
                error[i].classList.add('visible');
                errorIcon[i].classList.add('visible');
            } else {
                this.classList.remove('invalid');
                error[i].classList.remove('visible');
                errorIcon[i].classList.remove('visible');
            }
 
  }
}

information();