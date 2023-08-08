import { IconButton } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import Tooltip from '@mui/material/Tooltip';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import ArrowCircleLeftOutlinedIcon from '@mui/icons-material/ArrowCircleLeftOutlined';
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';
import TextField from '@mui/material/TextField';
import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

export default function Main() {
  const [date, setDate] = useState(new Date());
  const [isShown, setIsShown] = useState(false);
  // console.log(date)

  const [list, setList] = useState("");
  const [shownList, setShownList] = useState({});

  function formatDate(date) {
    const year = date.toLocaleString("default", { year: "numeric" });
    const month = date.toLocaleString("default", { month: "2-digit" });
    const day = date.toLocaleString("default", { day: "2-digit" });

    return [year, month, day].join("-");
  }

  const dateString = formatDate(date);

  //console.log(dateString);

  function handleChange(event) {
    const value = event.target.value;
    setList(value);
  }

  function deleteItem(index) {
    //console.log("done", index)
    const newArray = [...shownList[dateString]];
    const updatedList = { ...shownList };
    newArray.splice(index, 1);
    Object.assign(updatedList, { [dateString]: newArray });
    
    setShownList(updatedList);
  }
  function prevDate() {
    const prevDay = new Date(date);
    //console.log(prevDay.getDate())
    prevDay.setDate(prevDay.getDate() - 1);
    setDate(prevDay);
  }

  function nextDate() {
    const nextDay = new Date(date);
    nextDay.setDate(nextDay.getDate() + 1);
    setDate(nextDay);
  }

  function addList(individualValue) {
    //console.log(dateString)
    //console.log(typeof dateString)
    //console.log(shownList)
    const tempValue = individualValue;
    const newShownList = shownList;
    if (shownList[dateString]) {
      Object.assign(newShownList, {
        [dateString]: [...shownList[dateString], tempValue],
      });
      setShownList(newShownList);
    } else {
      Object.assign(newShownList, { [dateString]: [tempValue] });
      setShownList(newShownList);
    }
  }
  //console.log("aaaa", shownList[dateString]);
  console.log(isShown);
  return (
    <div className="main">
      <div className="calendar--container">
        <Calendar onChange={setDate} value={date} />
      </div>
      <div className="text-center">
        <h2 className="list-of-work-title">
          List of works for :
          <span>{date.toDateString()}</span>
        </h2>
        <ul className="list-of-work">
          {shownList[dateString] &&
            shownList[dateString].map((obj, index) => {
              // console.log(shownList[dateString],"inside map")
              return (
                <div className="work-rows">
                  <li>{obj}</li>
                  <div
                    className="dustbin-icon"
                    onClick={() => {
                      deleteItem(index);
                    }}
                  >
                    <Tooltip title="Delete" arrow>
                      <IconButton aria-label="delete">
                        <DeleteIcon />
                      </IconButton>
                    </Tooltip>
                  </div>
                </div>
              );
            })}
        </ul>
        <div className="add--colomn">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              addList(list);
              setList("");
            }}
            className="add-block"
          >
            <TextField 
              id="standard-basic" 
              label="Add New Work" 
              variant="standard"  
              color="secondary"
              onChange={handleChange}
              value={list}
            />
            <Tooltip title="ADD" arrow>
            <IconButton type="submit">
                <AddCircleIcon />
              </IconButton>
            </Tooltip>   
          </form>

          <div className="prev-and-next-btn">
          <Tooltip title="Previous Date" arrow>
            <IconButton aria-label="left-arrow">
              <ArrowCircleLeftOutlinedIcon fontSize="large" onClick={() => {
                prevDate(date);
              }}/>
            </IconButton>
          </Tooltip>
          <Tooltip title="Next Date" arrow>
          <IconButton aria-label="right-arrow">
              <ArrowCircleRightOutlinedIcon fontSize="large" onClick={() => {
                nextDate(date);
              }}/>
            </IconButton>
          </Tooltip>
          </div>
        </div>
      </div>
    </div>
  );
}
