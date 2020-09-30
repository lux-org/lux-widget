export const dispatchLogEvent = function(action:string,param:any){
    const LOG:boolean = true; // toggle log on/off 
    if (LOG){
        var event = new CustomEvent("LOG",{"detail":{"action":action,"param":param}})
        document.dispatchEvent(event);
    }
}