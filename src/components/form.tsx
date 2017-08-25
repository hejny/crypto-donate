import * as React from "react";


export default function Form() {

    return (
        <div>
            <form id="donate">
                <label>
                    Jméno:
                    <input type="text" name="name" maxLength={200}/>
                </label>
                <label>
                    Vzkaz:
                    <textarea name="message" maxLength={255}/>
                </label>

                {/*todo In future here should be currency selector.*/}
                <input type="hidden" name="currency" value="BTC"/>
                <input type="submit" value="Darovat!"/>
            </form>


            Pozor posílej pouye Bitcoin ne Bitcoin Cash
        </div>
    );

}
