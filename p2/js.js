window.onscroll=function()
{
    myfunction()
};
var nav=document.getElementsByClassName("navbar");
var sticky=navbar.offsettop;

function myfunction(){
    if (window.pageYOffset >=sticky)
    {
        navbar.classlist.add("sticky")
    }else{
        navbar.classlist.remove("sticky");
    }
}