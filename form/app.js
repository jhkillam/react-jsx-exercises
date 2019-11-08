let TextInput = () => {
    return <span>
      <div className="input-field col s6">
        <input type="text" id="textbox"></input>
        <label for="textbox">Text goes here</label>
      </div>
    </span>
}

let YesNoRadio = () => {
    return <span>
      {/* Make this component render two styled radio button side by side labelled "yes" and "no" */}
      <form>
        <label>
          <input name="group-1" type="radio" />
          <span className="radio-text">Yes</span>
        </label>
        <label>
          <input name="group-1" type="radio" />
          <span className="radio-text">No</span>
        </label>
      </form>
      <br/>
      </span>
}

let SubmitButton = () => {
    return <span>
      {/* Make this component render a styled button of type "submit" */}
        <a className="waves-effect waves-light btn">Submit</a>
      </span>
}

let Form = () => {
    return <span>
      <div className="container">
      {/* Make this Component render a form tag with 3 text inputs, two yes/no radio buttons, and a submit button  */}
        <TextInput/>
        <TextInput/>
        <TextInput/>
        <YesNoRadio/>
        <YesNoRadio/>
        <SubmitButton/>
      </div>
    </span>
}

ReactDOM.render(<Form/>, document.getElementById('root'))