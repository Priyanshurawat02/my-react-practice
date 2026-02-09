export default function NameList() {
const names =["Ram", "shyam", "Mohan", "sohan" , "radhe"];
    
    return (
        <div>  
         <ul>
            {names.map((name, index) => <li key={index}>{name}</li>)}
            </ul>
        </div>
    );
};