import * as React from "react";
import Ticker from "react-ticker";
import IPageAlertProps from "./IPageAlertProps";
import styles  from "./PageAlert.module.scss";
import Constants from "../helpers/Constants";

export default function PageAlerts(props: IPageAlertProps) {
  const [isMove, setIsMove] = React.useState(true);
  const listItems = props.items;
  console.log(listItems);
  var content = listItems[0];
  var alertNotification = content['alerttype'];
  console.log(alertNotification);
  function generateNewsText(date: Date) {
    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
  }

  const itemStyle: React.CSSProperties = {
    margin: "0 5px",
  };
  if(alertNotification == "Reminder" )
  { 
    console.log(alertNotification);
    return (
    <div
      id={Constants.ROOT_ID}
      onMouseEnter={() => {
        setIsMove(false);
      }}
      onMouseLeave={() => {
        setIsMove(true);
      }}
      className={styles.newsTicker}
    >   
        {
          <>
            {props.items &&
              props.items.map((news) => (
                <>              
                  <span style={itemStyle}> {news.content}</span>
                </>
              ))}
          </>
        }      
    </div>
  );
  }
  else if(alertNotification = "Warning")
  {
    console.log(alertNotification);
    return (
      <div
        id={Constants.ROOT_ID}
        onMouseEnter={() => {
          setIsMove(false);
        }}
        onMouseLeave={() => {
          setIsMove(true);
        }}
        className={styles.warningTicker}
      >     
          {
            <>
              {props.items &&
                props.items.map((news) => (                   
                  <>                
                    <span style={itemStyle}> {news.content}</span>
                  </>
                ))}
            </>
          }
        
      </div>
    );
        }
}

