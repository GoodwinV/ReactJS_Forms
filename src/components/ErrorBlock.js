import React from 'react';

function ErrorBlock(props) {
    if (props.isCriticalError) {
        return (
            <div className="alert alert-danger d-flex justify-content-start align-items-center">
                <svg className="alert__icon" xmlns="http://www.w3.org/2000/svg" width="512px" height="512px" viewBox="0 0 510 510">
                    <path d="M255,0C114.75,0,0,114.75,0,255s114.75,255,255,255s255-114.75,255-255S395.25,0,255,0z M51,255c0-112.2,91.8-204,204-204    c45.9,0,89.25,15.3,124.95,43.35l-285.6,285.6C66.3,344.25,51,300.9,51,255z M255,459c-45.9,0-89.25-15.3-124.95-43.35    L415.65,130.05C443.7,165.75,459,209.1,459,255C459,367.2,367.2,459,255,459z" fill="#241c15"/>
                </svg>
                <p className="alert__text ml-3">
                    {props.errorText}
                </p>
            </div>
        )
    } else {
        return (
            <div className="alert alert-warning d-flex justify-content-start align-items-center">
                <svg className="alert__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 508.52 508.52" width="512px" height="512px">
                    <path d="M254.26,0C113.845,0,0,113.845,0,254.26s113.845,254.26,254.26,254.26      s254.26-113.845,254.26-254.26S394.675,0,254.26,0z M254.26,476.737c-122.68,0-222.477-99.829-222.477-222.477      c0-122.68,99.797-222.477,222.477-222.477c122.649,0,222.477,99.797,222.477,222.477      C476.737,376.908,376.908,476.737,254.26,476.737z" fill="#241c15"/>
                    <path d="M254.26,95.347c-17.544,0-31.782,14.239-31.782,31.782v158.912      c0,17.544,14.239,31.782,31.782,31.782s31.782-14.239,31.782-31.782V127.13C286.042,109.586,271.804,95.347,254.26,95.347z" fill="#241c15"/>
                    <circle cx="254.26" cy="380.881" r="31.782" fill="#241c15"/>
                </svg>
                <p className="alert__text ml-3">
                    <span className="font-weight-bold d-block">Whoops</span>
                    {props.errorText}
                </p>
            </div>
        )
    }
}

export default ErrorBlock;