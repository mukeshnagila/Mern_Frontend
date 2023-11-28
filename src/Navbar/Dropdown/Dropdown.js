import React from "react";
import "../Dropdown/Dropdown.css";

function Dropdown() {
    return(
        <>
            <div class='megamenu'>
                <div class='megamenu__option-label category'>
                    Categories
                </div>
                <div class='megamenu__option-children'>
                    <div class='megamenu__option'>
                        <div class='megamenu__option-label'>
                                Business
                        </div>
                        <div class='megamenu__option-children'>
                            <div class='megamenu__option2'>
                                <div class='megamenu__option-label'>
                                    Communication
                                </div>
                                <div class='megamenu__option-label'>
                                    Managements
                                </div>
                                <div class='megamenu__option-label'>
                                    Business Strategy
                                </div>
                                <div class='megamenu__option-label'>
                                    Operations
                                </div>
                                <div class='megamenu__option-label'>
                                    Human Resources
                                </div>
                            </div>
                        </div>

                        <div class='megamenu__option-label'>
                                Business
                        </div>
                        <div class='megamenu__option-children'>
                            <div class='megamenu__option2'>
                                <div class='megamenu__option-label'>
                                    Communication123
                                </div>
                                <div class='megamenu__option-label'>
                                    Managements
                                </div>
                                <div class='megamenu__option-label'>
                                    Business Strategy
                                </div>
                                <div class='megamenu__option-label'>
                                    Operations
                                </div>
                                <div class='megamenu__option-label'>
                                    Human Resources
                                </div>
                            </div>
                        </div>   
                    </div>
                </div>
                </div>
        </>
    )
}

export default Dropdown;
