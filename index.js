function shout(string){
  return string.toUpperCase()
}

function whisper(string){
  return string.toLowerCase()
}



function sayHiToGrandma(string)
{
  var a = 'YES INDEED!'
  var b = "I can't hear you!"
  var c = 'I love you, Grandma.'
  var d = 'I love you, too.'
  
  var uC = "HELLO!"
  var lC = "hello!"
  
  if(string === uC)  return a
  else if(string === lC)  return b
  else if(string === c) return d
}

function logShout(string)
{
  var newString = string.toUpperCase()
  
  const spy;
  
  console.log(newString)
}

function logWhisper(string)
{
  console.log(string.toLowerCase())
}