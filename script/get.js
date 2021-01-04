const baseUrl = "https://adventuretimeapi.herokuapp.com"

const names = fetch("https://adventuretimeapi.herokuapp.com/people")

names.then((res)=>{
    if(res.status === 200){
        console.log("todo ok")
        const data = res.json()
        return data
    }else{
        throw new Error("todo mal" + res.status)
    }
}).then((res)=>{
    for (i=0; i< res.length; i++){
        console.log("Los personajes son:" + res[i].name)
    }
})
.catch(()=>{
    console.log("todo mal")
})