import React from 'react';
import { MdSend } from 'react-icons/md';

const ExpenseForm = ({charge, amount, handleCharge, handleAmount, handleSubmit, edit}) => {
    return (
    <form onSubmit={handleSubmit}>
        <div className="form-center">
            <div className="from-group">
                <label htmlFor='charge'>charge</label>
                <input type="text" className="form-control" id="charge" name="charge" placeholder="e.g rent" value={charge} onChange={handleCharge}></input>
            </div>
            <div className="from-group">
                <label htmlFor='amount'>amount</label>
                <input type="number" className="form-control" id="amount" name="amount" placeholder="e.g 100" value={amount} onChange={handleAmount}></input>
            </div>
        </div>
        <button type="submit" className="btn">
            {edit?'edit':'submit'}
            <MdSend className="btn-icon"></MdSend>
        </button>
    </form>
    );
};

export default ExpenseForm;