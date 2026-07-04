import "./Login.css";

export default function Login() {
    return (
        <div className="login-page">

            <div className="page-border">

                <div className="login-logo-caragua">
                    <img
                        src="https://media.canva.com/v2/image-resize/format:PNG/height:208/quality:100/uri:ifs%3A%2F%2FM%2F603740f1-a559-46f0-845a-2a42959faf1e/watermark:F/width:800?csig=AAAAAAAAAAAAAAAAAAAAAD1tIFJ2rICJVErxva_6y-K3SH0OIRSyY2WjBFITFDCx&exp=1783203513&osig=AAAAAAAAAAAAAAAAAAAAALx1lu9d3T-Vq-FguUjzFiAJuQ7qYd0CTZh_RMsI0OAN&signer=media-rpc&x-canva-quality=screen"
                        alt="Logo Caraguatatuba"
                    />
                </div>

                <div className="login-box">

                    <h1>LOGIN</h1>

                    <div className="linha"></div>

                    <form className="login-form">

                        <div className="campo">
                            <label htmlFor="username">RA:</label>

                            <input
                                className="text-input"
                                type="text"
                                id="username"
                            />
                        </div>

                        <div className="campo">
                            <label htmlFor="password">SENHA:</label>

                            <input
                                className="text-input"
                                type="password"
                                id="password"
                            />
                        </div>

                    <div className="centralizar">
                        <div className="campo">
                            <label htmlFor="password">ENTRAR</label>
                        </div>
                    </div>
                    </form>
                </div>
            </div>
        </div>
    );
}