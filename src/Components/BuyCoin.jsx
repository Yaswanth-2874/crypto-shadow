import React, { useState } from "react";
import SelectButton from "./SelectButton";

function BuyCoin(props) {
  const [balance, setBalance] = useState(1000000);
  const [coins, setCoins] = useState(0);
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const { cost } = props;

  const onBuyingCoin = () => {
    if (!isNaN(input1) && !isNaN(input2)) {
      const input1Value = parseFloat(input1);
      const input2Value = parseFloat(input2);
      if (balance < input2Value) {
        alert("Not enough Balance fool");
      } else {
        console.log(`Bought ${input1Value} coins for ₹${input2Value}`);
        setBalance(balance - input2Value);
        setCoins(coins + input1Value);
      }
    } else {
      alert("Enter valid numerical values");
    }
  };

  const onSellingCoin = () => {
    if (!isNaN(input1) && !isNaN(input2)) {
      const input1Value = parseFloat(input1);
      const input2Value = parseFloat(input2);
      if (coins < input1Value) {
        alert("Not enough coins to sell");
      } else {
        console.log(`Sold ${input1Value} coins for ₹${input2Value}`);
        setBalance(balance + input2Value);
        setCoins(coins - input1Value);
      }
    } else {
      alert("Enter valid numerical values");
    }
  };

  return (
    <div
      style={{
        height: 497.6,
        width: 996.8,
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: "10px",
      }}
    >
      <div
        style={{
          backgroundColor: "rgb(22, 24, 32)",
          padding: "15px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <span>Balance Amount : {balance}</span>
        <span>Coins Bought : {coins}</span>
      </div>
      <div
        style={{
          backgroundColor: "rgb(22, 24, 32)",
          display: "flex",
          flexDirection: "column",
          fontSize: "larger",
          padding: "15px",
        }}
      >
        <span
          style={{
            display: "flex",
            gap: "10px",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          Please input the desired quantity of coins to purchase
          <span
            style={{
              padding: "10px",
              display: "flex",
              gap: "30px",
              width: "100%",
              borderBottom: "1px solid white",
            }}
          >
            <input
              type="text"
              onChange={(e) => {
                setInput1(e.target.value);
                if (!e.target.value) {
                  setInput2("");
                  return;
                }
                isNaN(+e.target.value)
                  ? setInput2("Enter a valid number")
                  : // eslint-disable-next-line
                    setInput2(parseFloat(e.target.value) * cost);
              }}
              value={input1}
              style={{
                background: "none",
                border: "1px solid white",
                color: "white",
                width: "320px",
                padding: "5px",
              }}
            ></input>
            <SelectButton selected={true} onClick={onBuyingCoin} bg="green">
              Buy
            </SelectButton>
            <SelectButton selected={true} onClick={onSellingCoin} bg="red">
              Sell
            </SelectButton>
          </span>
        </span>
        <span
          style={{
            display: "flex",
            gap: "10px",
            flexDirection: "column",
            padding: "10px",
            alignItems: "center",
          }}
        >
          Please enter your budget (in ₹)
          <span style={{ display: "flex", gap: "30px", width: "100%" }}>
            <input
              type="text"
              value={input2}
              onChange={(e) => {
                setInput2(e.target.value);
                if (!e.target.value) {
                  setInput1("");
                  return;
                }
                isNaN(+e.target.value)
                  ? setInput1("Enter a valid number")
                  : setInput1(parseFloat(e.target.value) / cost);
              }}
              style={{
                background: "none",
                border: "1px solid white",
                color: "white",
                width: "320px",
                padding: "5px",
              }}
            ></input>
            <SelectButton selected={true} onClick={onBuyingCoin} bg="green">
              Buy
            </SelectButton>
            <SelectButton selected={true} onClick={onSellingCoin} bg={"red"}>
              Sell
            </SelectButton>
          </span>
        </span>
      </div>
    </div>
  );
}

export default BuyCoin;
