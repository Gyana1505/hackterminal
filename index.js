let additem= async(item)=>{
    await rendomdelay()
    let div= document.createElement("div")
    div.innerHTML=item
    document.body.append(div)
  
}
const rendomdelay = ()=>{
    return new Promise((resolve,reject) => {
        let tout=1+6*Math.random()
        setTimeout(()=>{
            resolve()
        },tout*1000)           
     })
}
async function main(){
    let t=setInterval(()=>{
    let last=document.body.getElementsByTagName("div")
    last=last[last.length-1]
    if(last.innerHTML.endsWith("...")){
        last.innerHTML=last.innerHTML.slice(0,last.innerHTML.length-3)
    }
    else{
        last.innerHTML=last.innerHTML+"."
    }
},100)
let text=[">>> initialized hacking now reading your data",">>> Reading your file",">>> Pasward file detected",">>> Sending all password and personal file to server",">>> Cleaning Up"]
 for (const item of text) {
  await additem(item) 
}
await rendomdelay()
clearInterval(t)
}
main()