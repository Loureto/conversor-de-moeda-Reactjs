import { render } from "@testing-library/react";
import { Button } from "./Button";

describe('Button component', () =>{
    it('renders  correctly', () =>{
        render(
            <Button />
        )
    })
})
