//adapted from example code 'benskitchen.com'



var spinning = false;

function spin()
{
	spinning = !spinning;
	var element = document.querySelector('#mainNav .nav-link.active');
    var name = element.getAttribute('mark');
	document.getElementById('model__RotationTimer_'+name).setAttribute('enabled', spinning.toString());
}

function stopRotation()
{
	spinning = false;
	var element = document.querySelector('#mainNav .nav-link.active');
    var name = element.getAttribute('mark');
	document.getElementById('model__RotationTimer_'+name).setAttribute('enabled', spinning.toString());
}

function animateModel()
{
	var element = document.querySelector('#mainNav .nav-link.active');
    var name = element.getAttribute('mark');
    if(document.getElementById('model__RotationTimer_'+name).getAttribute('enabled')!= 'true')
        document.getElementById('model__RotationTimer_'+name).setAttribute('enabled', 'true');
    else
        document.getElementById('model__RotationTimer_'+name).setAttribute('enabled', 'false');
}

function frame(val)
{
	var element = document.querySelector('#mainNav .nav-link.active');
    var name = element.getAttribute('mark');
	var e = document.getElementById('Model'+name);
	while(e.runtime.togglePoints(true) != val) {}
	
}

var lightOn = true;

function headlight()
{
	lightOn = !lightOn;
	document.getElementById('model__headlight').setAttribute('headlight', lightOn.toString());
}

function getModel(){
	var element = document.querySelector('#mainNav .nav-link.active');
    var name = element.getAttribute('mark'); 
}

function changeFrontDirection(){
	var element = document.querySelector('#mainNav .nav-link.active');
    var name = element.getAttribute('mark');

	document.getElementById('model__'+name+'_Front').setAttribute('bind', 'true');
}
function changeBackDirection(){
	var element = document.querySelector('#mainNav .nav-link.active');
    var name = element.getAttribute('mark');
	document.getElementById('model__'+name+'_Back').setAttribute('bind', 'true');
}
function changeLeftDirection(){
	var element = document.querySelector('#mainNav .nav-link.active');
    var name = element.getAttribute('mark');
	document.getElementById('model__'+name+'_Left').setAttribute('bind', 'true');
}
function changeRightDirection(){
	var element = document.querySelector('#mainNav .nav-link.active');
    var name = element.getAttribute('mark');
	document.getElementById('model__'+name+'_Right').setAttribute('bind', 'true');
}
function changeTopDirection(){
	var element = document.querySelector('#mainNav .nav-link.active');
    var name = element.getAttribute('mark');
	document.getElementById('model__'+name+'_Top').setAttribute('bind', 'true');
}
function changeBottomDirection(){
	var element = document.querySelector('#mainNav .nav-link.active');
    var name = element.getAttribute('mark');
	document.getElementById('model__'+name+'_Bottom').setAttribute('bind', 'true');
}


