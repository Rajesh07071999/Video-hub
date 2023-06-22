import { Container } from '@chakra-ui/react'
import React from 'react'
import '../style.css'
function Login() {
    return (
        <Container>
            {/* <div className="container"> */}
            <div className="row" direction={["column", "row"]}>
                <div className="col-lg-3 col-md-2" />
                <div className="col-lg-6 col-md-8 login-box">
                    <div className="col-lg-12 login-key">
                        <i className="fa fa-key" aria-hidden="true" />
                    </div>
                    <div className="col-lg-12 login-title" style={{ marginTop: -48 }}>Login</div>
                    <div className="col-lg-12 login-form">
                        <div className="col-lg-12 login-form">
                            <form>
                                <div>
                                    <div className="form-group">
                                        <label className="form-control-label">USERNAME</label><br />
                                        <input type="text" className="form-control" />
                                    </div>
                                    <div className="form-group">
                                        <label className="form-control-label">PASSWORD</label><br/>
                                        <input type="password" className="form-control" i="" />
                                        <br /><br /><br />
                                        <button type="submit" className="btn btn-outline-primary">
                                            LOGIN
                                        </button>
                                        <br/><br/>  
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-2" />
                </div>
            </div>
            {/* </div> */}

        </Container>
    )
}

export default Login
