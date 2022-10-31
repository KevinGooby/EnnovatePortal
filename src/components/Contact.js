import "./Contact.css";
import React from "react";

class Contact extends React.Component {
    render() {
        return (
            <div class="contact">
                <h2 class="section-title">Contact Us</h2>
                <div class="section-line"></div>
                <div class="content">
                    <form action ="results.html" method="GET"> 
                        <div id="first">
                            <text>After providing the following information, we'll reach out to you through the provided email!</text>
                        </div>
                        <br></br>
                        <div id="div1">
                            <label for="name">First Name</label>
                            <input type="text" name="First Name" id="name"  placeholder="e.g. Kevin" required></input>
                            <label for="school" id="row1">School</label>
                            <input type="text" name="School" id="school" placeholder="e.g. Uhill Secondary" required></input>
                        </div>

                        
                        <div id="div2">
                            <label for="email">Email</label>
                            <input type="email" name="Email" id="row2" placeholder="e.g. kevin123@gmail.com" required></input>
                            <label for="teacher">Teacher</label>
                            <input type="text" name="Teacher" id="row2" placeholder="e.g. Mr. Gu" required></input>
                        </div>

                        <br></br>
                        
                        <div id="div3">
                            <label class="textarea-label" for="msg">Message (1000 characters max)</label>
                            <textarea type="text" name="Message" id="msg" placeholder="Enter here..." maxlength="1000" required></textarea>
                        </div>
                        
                        <button type="submit" id="send">Send</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default Contact;