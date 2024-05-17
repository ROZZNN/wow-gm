export default () => {
    return(
        <div class="profile">
            <img></img>
            <h2>NAME</h2>
            <div class="about_profil">
                <p>bla bla bla</p>
            </div>
            <div class='comment'>
                <div></div>
                <form>
                    <label for="comment">Comment</label>
                    <input type="text" name="comm" id="comm"></input>
                    <button type="submit">Отправить</button>
                </form>
            </div>
        </div>
    );
}