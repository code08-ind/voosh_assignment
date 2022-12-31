import React, { useEffect, useState } from 'react';

const getFormData = () => {
    const storedValues = localStorage.getItem('formData');
    if (!storedValues) {
        return {
            name: "",
            email: "",
            password: "",
            company: "",
            position: ""
        };
    }
    else {
        return JSON.parse(storedValues);
    }
}

const Login = () => {
    const [user, setUser] = useState(getFormData);
    const [text, setText] = useState('Book Demo');

    useEffect(() => {
        localStorage.setItem("form", JSON.stringify(user));
    }, [user]);

    const handleSubmit = (e) => {
        e.preventDefault();
        setText('Logined')
    }

    let formName, formValue;
    const handleInput = (e) => {
        formName = e.target.name;
        formValue = e.target.value;
        setUser({ ...user, [formName]: formValue });
    }

    return (
        <section className="login">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <h1>
                            Book A Demo Now
                        </h1>
                    </div>
                    <div className="col-md-6">
                        <div className="form-container">
                            <br />
                            <form onSubmit={handleSubmit}>
                                Name <span style={{ "color": "red" }}>*</span>
                                <br />
                                <input type="text" name="name" autoComplete='off' value={user.name} onChange={handleInput} placeholder='Ex John Doe' required />
                                <br />
                                Email <span style={{ "color": "red" }}>*</span>
                                <br />
                                <input type="text" name="email" autoComplete='off' value={user.email} onChange={handleInput} placeholder='Ex mail@website.com' required />
                                <br />
                                Password <span style={{ "color": "red" }}>*</span>
                                <br />
                                <input type="password" name="password" autoComplete='off' value={user.password} onChange={handleInput} placeholder='Ex 12345678' required />
                                <br />
                                Company Name <span style={{ "color": "red" }}>*</span>
                                <br />
                                <input type="text" name="company" autoComplete='off' value={user.company} onChange={handleInput} placeholder='Ex XYZ PVT LTD.' required />
                                <br />
                                Your Title <span style={{ "color": "red" }}>*</span>
                                <br />
                                <input type="text" name="position" autoComplete='off' value={user.position} onChange={handleInput} placeholder='Ex Operational Head' required />
                                <br />
                                <button type="submit">{text}</button>
                            </form>
                            <br />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Login;