// React

// Icons

// components
import StarRatingBar from '../subComponents/StarRatingBar';
import SearchBox from "../subComponents/SearchBox"
  
  
  interface TableProps {
    tableName:string,
    list: Array<object>,
  }
  
  const Table: React.FC<TableProps> = ({tableName, list}) => {
    

    console.log("table ", tableName, list)

    const testRun = (event: any) => {
        event.preventDefault()

        console.log("testRun", event)
    }

    return (
      <>
      <div className="tableHeader">
          <h2>{tableName}</h2>
      </div>
        <div className="tableBox">
        <SearchBox searchSubmit={testRun}/>
        <div className="table">
            {list.length > 0 ? <div className="scrollBox">
              {list.map((row: any) => 
              <div key={row.uid} className="tableRow">
                <span>{row.profilePicUrl === "" ? <div className="tableRowImage">{row.displayName[0]}</div> : row.profilePicUrl}</span>
                <span>{row.displayName}</span>
                <span className="stars"><StarRatingBar numberOfStars={row.starRating}/></span>
              </div>)}
            </div> : 
            <div className="emptyTableMessageBox"><p>There are no {tableName} available.</p></div>}
        </div>
        </div>
      </>
    );
  }
  
  export default Table;
  