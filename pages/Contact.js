export default () => `
<div class="left">
          <div class="cell">
              <div class="sun"></div>
              <div class="space"></div>
              <div class="ball3"></div>
              <div class="ball4"></div>
              <div class="ball5"></div>
              <div class="ball6"></div>
            </div>
      </div>
      <div class="main">
        <div class=" banner"><h3>Contact Me</h3></div>
        <form
          action="https://formspree.io/douglasg.moore@gmail.com"
          method="POST"
        >
          <div>
            <label for="name"
              >Name:<input
                class="field"
                type="text"
                name="name"
                id="name"
                autofocus
            /></label>
          </div>
          <div>
            <label for="email"
              >Email:<input class="field" typr="email" name="email" id="email"
            /></label>
          </div>
          <div>
            <label for="msg"
              >Message:
              <textarea
                class="fields"
                name="msg"
                id="msg"
                cols="20"
                rows="10"
              ></textarea>
            </label>
            <div><input class="button" type="submit" value="send" /></div>
          </div>
        </form>
      </div>

`;
