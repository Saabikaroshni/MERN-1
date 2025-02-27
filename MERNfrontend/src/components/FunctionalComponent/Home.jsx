function Home(properties){
    var styling = {
        textAlign:"Center",
        backgroundColor:"blue",
        color:"white"
    }
    var a=10
    return(
       <div>
        <h1 style={styling}>Home Page </h1>{/* internal*/}
        {/*<h1 style={{textAlign:"center"}}>HomePage</h1> inline*/}
        <h2>Below tag is for props</h2>
        <h3>Props:{a}</h3>{/*js line inside html */}
        <h3>Props:{styling.backgroundColor}</h3>
        <h3>Props:{properties.properties}{properties.sjit}</h3>
       </div>
    );
}
export default Home;