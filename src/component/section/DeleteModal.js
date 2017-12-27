import React from 'react'

const DeleteModal = (props) => {
    const { is_active, handle} = props
    return (
        <div
            className="_md5d"
            style={{
            display: is_active
                ? "block"
                : "none"
        }}>
            <div className="__x" onClick={handle.Off}></div>
            <div className="_ro">
                <div className="_c5x312 _c5m36 _c5m3o3">
                    <div className="_cn _md5cu">
                        <div className="_ro">
                            <div className="_c5x312">
                                <h1 className="_he3c">Delete Confirmation</h1>
                                <p className="_me3c">Are you sure to use this action?</p>
                            </div>
                        </div>
                        <div className="_ro">
                            <div className="_c5x312"></div>
                        </div>
                        <div className="_ro">
                            <div className="_c5x36">
                                <input className="_bt5m3b" type="button" name="submit" value="Cancel" onClick={handle.Off}/>
                            </div>
                            <div className="_c5x36">
                                <input className="_bt5m3r" onClick={handle.Action} type="button" name="submit" value="Delete"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default DeleteModal