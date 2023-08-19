import React from 'react'

export default function Alert(props) {
    const captalized = (word) =>
    {
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
  return (
    <div>
        <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
        <strong>{captalized(props.alert.msg)}</strong>
        <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
    </div>
  )
}
