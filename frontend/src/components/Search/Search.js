import React, { useRef } from 'react'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
`;

const InputContainer = styled.div`
    display: flex;
    margin-bottom: 8px;
    width: 75%;
`;

const Input = styled.input`
    margin: 0px 16px ;
    width: 100%;
`;

const Text = styled.h1`
  font-size: calc(3rem + 6*(100vw - 375px)/1065);
  font-weight: 700;
  line-height: 1.1;
`;

const Hint = styled.div`
    font-size: large;
`;

const Button = styled.button``;

/* TODO: Remove the submit option and show results based off query. This was made in order to prevent high usage */
export const Search = ({ setSearchValue }) => {
    const inputRef = useRef(null);

    const handleSearch = (event, submitButton = false) => {
        if (event?.key === "Enter" || submitButton) {
            setSearchValue(inputRef.current.value);
        }
    }
    return (
        <Container>
            <Text>Welcome to The Met API</Text>
            <InputContainer>
                <Input placeholder="Go ahead and search!" ref={inputRef} onKeyDown={e => handleSearch(e)} />
                <Button onClick={e => handleSearch(e, true)}>Search!</Button>
            </InputContainer>
            <Hint>Search by artistOrCulture, medium, geoLocation or any other keyword.Specify searches with ":" Example - artistOrCulture:Louise Bourgeois </Hint>
        </Container>
    )
}
