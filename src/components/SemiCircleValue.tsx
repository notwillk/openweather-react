import styled from "styled-components";
import React, { useMemo } from "react";

interface SemiCircleValueProps<T extends string> {
    sections: Record<T, string>;
    order: T[];
    selected: T;
}

export default function SemiCircleValue<T extends string>({ order, sections, selected }: SemiCircleValueProps<T>) {
    const sectionDegrees = useMemo(() => 180 / order.length, [order]);

    const selectedDegrees = useMemo(() => {
        const selectedIndex = order.indexOf(selected);
        return (selectedIndex + 0.5) * sectionDegrees;
    }, [selected, sections, sectionDegrees, order]);

    return (
        <Container>
            <Guage>
                {order.map((key, index) => (
                    <Section key={key} color={sections[key]} degrees={sectionDegrees} index={index} />
                ))}
            </Guage>
            <Selection degrees={selectedDegrees} />
        </Container>
    );
}

const Container = styled.div`
    width: 100%;
    height: 100%;
`;

const Guage = styled.ul`
    position: relative;
    width: 100%;
    height: 100%;

    &::before, &::after {
        content: '';
        position: absolute;
        border-radius: 100cqh;
    }
`;

const Section = styled.li<{color: string, degrees: number, index: number}>`
    background: ${({color}) => color};
    &::after {
        content: '${({degrees, index}) => `${index}: ${degrees}`}';
    }
`;

const Selection = styled.div<{degrees: number}>``;