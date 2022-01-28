function changeBackground(){
    var box = document.querySelector('.blue_block');
    box.classList.toggle('red_block');
}

var container = document.querySelector('.blue_block');
container.addEventListener('mouseenter', changeBackground);
container.addEventListener('mouseleave', changeBackground);

/////////////////////////////////

function changeCounterLike(){
    var like = document.querySelector('#like-btn');
    var counter = document.querySelector('#like-counter');
    var start = 0;
    ++start;
    counter.innerHTML = start;
}

var like = document.querySelector('#like-btn');
like.addEventListener('dblclick', changeCounterLike);

//////////////////////////////////////

//function addInputValue(){
    //ar newName = document.querySelector('#first_name2');
//}

//var counter = 0;
var newName = document.querySelector('#first_name2');
newName.addEventListener('keydown', function(event){
    //console.log(++counter);
    //console.log(event.key);
    if(event.key === 'Enter' && newName.value.trim() !== ''){
        var currentText = newName.value;
        var list = document.querySelector('#name_list');
        list.innerHTML += '<tr><td>' + currentText + '</td></tr>';
        newName.value = '';
    }
})

//////////////////////////////////////


var btnOpenModal = document.querySelector('#open-modal');
btnOpenModal.addEventListener('click', function(event){
    var modal = document.querySelector('#modal1');
    modal.classList.add('modal_open'); 
})

var modal = document.querySelector('#modal1');
window.addEventListener('keydown', function(event){
    if(event.key === 'Escape'){
        modal.classList.remove('modal_open');
    }
})

///////////////////////////////// task 5

var inputLogin = document.querySelector('#first_login');
inputLogin.addEventListener('input', function(){
    if(inputLogin.value.trim() !== '' && inputLogin.value.length >=4){
        inputLogin.nextElementSibling.style.display = 'none';
    } else {
        inputLogin.nextElementSibling.style.display = 'block';
    }
})

////////////////////// task 6

var inputLogin1 = document.querySelector('#first_login1');
inputLogin1.addEventListener('input', function(){
    if(inputLogin1.value.trim() !== '' && inputLogin1.value[0] === inputLogin1.value[0].toUpperCase()){
        inputLogin1.nextElementSibling.style.display = 'none';
    } else {
        inputLogin1.nextElementSibling.style.display = 'block';
    }
})

/////////////////// task 7

function calculateWater(){
    var inputWeight = document.querySelector('#first_kg');
    var currentWeight = inputWeight.value;
    var totalInfo = document.querySelector('#final-calculate');
    totalInfo.innerHTML = currentWeight*30;
}

var btnWeightCalculate = document.addEventListener('click', calculateWater);


/////////////////// task 8

function calculateSalary(){
    var inputDays = document.querySelector('#first_days');
    var currentDays = inputDays.value;
    var salaryHour = document.querySelector('select');
    currentSalaryHour = salaryHour.value;
    var finalSalary = document.querySelector('#final-salary');
    finalSalary.innerHTML = currentDays * 8 * currentSalaryHour + ' $';
}

var btnSalaryCalculate = document.addEventListener('click', calculateSalary);


///////////////// task 9

var inputLogin9 = document.querySelector('#first_login9');

inputLogin9.addEventListener('input', function(){
    if(inputLogin9.value.trim() !== '' && inputLogin9.value[0] === inputLogin9.value[0].toUpperCase()){
        inputLogin9.nextElementSibling.style.display = 'none';
    } else {
        inputLogin9.nextElementSibling.style.display = 'block';
    }

    var errorMessage2 = document.querySelector('.error-message4');
    if(inputLogin9.value.trim() !== '' && inputLogin9.value.length >= 5){
        errorMessage2.style.display = 'none';
    } else {
        errorMessage2.style.display = 'block';
    }
})