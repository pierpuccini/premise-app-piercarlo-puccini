import React from 'react'
import styled from 'styled-components';

const T = styled.table`
    padding: 24px;
    width: 100%;
    border-collapse: collapse; 
`;

const Tr = styled.tr`
    border-bottom: 2px solid #000;
`;
const Th = styled.th``;
const Td = styled.td``;

const Thead = styled.thead``;
const Tbody = styled.tbody``;

const A = styled.a``;

export const Table = ({ items }) => {
    return (
        <T>
            <Thead>
                <Tr>
                    <Th>Title</Th>
                    <Th>Artist</Th>
                    <Th>Medium</Th>
                    <Th>Department</Th>
                    <Th>Country</Th>
                    <Th>Met Page</Th>
                    <Th>Image URL</Th>
                </Tr>
            </Thead>
            <Tbody>
                {items?.map(({
                    objectID,
                    title,
                    artistAlphaSort,
                    medium,
                    department,
                    country,
                    objectURL,
                    primaryImage
                }) => (
                    <Tr key={objectID}>
                        <Td>{title}</Td>
                        <Td>{artistAlphaSort}</Td>
                        <Td>{medium}</Td>
                        <Td>{department}</Td>
                        <Td>{country}</Td>
                        <Td>
                            <A href={objectURL} target="_blank ">Official Met Page</A>
                        </Td>
                        <Td>
                            {primaryImage ? <A href={primaryImage} target="_blank ">view</A> : 'Not public'}

                        </Td>
                    </Tr>
                )
                )}
            </Tbody>
        </T>
    )
}