import React from "react"
import styled from "styled-components"
import paperPlane from "../../images/send.svg"

const CheckoutWidget = () => {
  return (
    <FormWrapper>
      <div>
      <FormGroup>
        <label htmlFor="checkInDate">check in date</label>
        <input
          type="date"
          placeholder="check in date"
          name="checkInDate"
        />
      </FormGroup>
      <FormGroup>
        <label htmlFor="checkOutDate">check out date</label>
        <input
          type="date"
          placeholder="check in date"
          name="checkInDate" />
      </FormGroup>
      <FormGroup>
        <label htmlFor="rooms">Rooms</label>
        <select name="rooms">
          <option value="1">Room 1</option>
          <option value="2">Room 2</option>
        </select>
      </FormGroup>
      <FormGroup>
        <button>
            {/* <span>
              Submit
            </span> */}
            <img src={paperPlane} alt="" />
        </button>
      </FormGroup>
      </div>
    </FormWrapper>
  )
}
const FormWrapper = styled.form`
  position: relative;
  margin-top: -5.8%;
  box-shadow: 0px 15px 30px #0000001A;
  div {
  padding: 10px 8px;
  background-color: #FFFFFF;
  display: flex;
  justify-content: center;
  z-index: 10;
  }
  `
const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  label {
    color: #5863F8;
    font-size: 13px;
    display: block;
    margin-bottom: 10px;
    text-transform: capitalize;
  }
  input,select {
    width: 280px;
    display: block;
    height: 50px;
    padding: 10px 30px;
    background-color: #EEEEEE;
    border: 1px solid #EEEEEE;
    outline: 1px solid #EEEEEE;
    font-family: "poppins", sans-serif;
    ::placeholder {
      color: #CECECE;
      font-family: "poppins", sans-serif;
    }
  }
  button {
    background-color: #5863F8;
    height: 51px;
    margin-top: 30px;
    margin-left: 20px;
    padding: 10px 20px;
    cursor: pointer;
    border: 1px solid #5863F8;

  }

  `
export default CheckoutWidget