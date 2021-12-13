import { render } from "@testing-library/react";
import { Header } from "./Header";

describe('Header component', () =>{
    it('renders correctly', () =>{
        render(
            <Header />
        )
    })
})