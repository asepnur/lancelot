/*----------------------------------------------------------------
                            SECTION UPLOAD FILE
------------------------------------------------------------------*/
import React, {Component} from 'react'
import {InputContent, LoadingAnim} from '../index.js'

class UploadFile extends Component {
    render() {
        return (
            <div
                className="_md"
                id="_md"
                style={{
                display: this.props.data.showUpload
                    ? "block"
                    : "none"
            }}>
                <div className="__x" onClick={this.props.handle.toggleUpload}></div>
                <div className="_ro">
                    <div className="_c5x312 _c5m36 _c5m3o3">
                        <div className="_cn _md5cu">
                            <div className="_ro">
                                <div className="_c5x312">
                                    <h1 className="_he3nb">FILE</h1>
                                    <p className="_me3c">Upload your file bellow
                                    </p>
                                </div>
                            </div>
                            <div className="_ro">
                                <div className="_c5x312">
                                    <div className="_md5i">
                                        <input
                                            type="file"
                                            id="upload"
                                            name="file"
                                            value={this.props.file}
                                            disabled={this.props.data.uploaded
                                            ? true
                                            : false}
                                            onChange={this.props.handle.onUploadFile}/> {this.props.data.isUploading
                                            ? <div align="center"><LoadingAnim color_left="#333" color_right="#333"/>
                                                    <p className="_me3c">Uploading your file ...
                                                    </p>
                                                </div>
                                            : this.props.data.uploaded
                                                ? <img
                                                        className="_i3ce"
                                                        onClick={this.props.handle.deleteFile}
                                                        src="/img/icon/blue/pdf-file-format-symbol.png"
                                                        alt="upload logo"/>
                                                : <img className="_i3ce" src="/img/icon/blue/upload.png" alt="upload logo"/>}
                                    </div>
                                </div>
                            </div>
                            <div className="_ro">
                                <div className="_c5x312">
                                    <label className="_me3b _bd" htmlFor="Description">Description</label>
                                    <InputContent
                                        type="text"
                                        name="description"
                                        onChangeState={this.props.handle.change}
                                        value={this.props.data.description}
                                        placeholder="Description"/>
                                </div>
                            </div>
                            <div className="_ro">
                                <div className="_c5x312">
                                    <input
                                        className="_bt5m3b"
                                        onClick={this.props.handle.uploadAssignment}
                                        type="button"
                                        name="submit"
                                        value="SUBMIT"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default UploadFile