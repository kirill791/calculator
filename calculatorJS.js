function insert(num){
    document.form.textviem.value = document.form.textviem.value + num;
}

function clean() {
    document.form.textviem.value = "";
}

function back(){
    let exp = document.form.textviem.value;
    document.form.textviem.value = exp.substring(0,exp.length-1);
}

function equal(){
    let exp = document.form.textviem.value;
    if(exp) {
        document.form.textviem.value = eval(exp);
    }
}