var block = [ ];
for (let i=1;i<=300;i++)
{
  block[i]=0;
}

function colour(classnamee){
  const pclass="grid";
  element=document.getElementsByClassName(classnamee);
  n=classnamee;
  if(block[n] == 0)
  {
    block[n]=1;
  element[0].style.backgroundColor ="white";
  }
  else
  {
    block[n]=0;
    element[0].style.backgroundColor ="red";
  }
}