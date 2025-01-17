import {
    Body,
    Container,
    Column,
    Head,
    Html,
    Preview,
    Row,
    Section,
    Text,
} from "@react-email/components";
import * as React from "react";

export const ContactEmailTemplate = (data: Record<string, string>) => (
    <Html>
        <Head />
        <Preview>Apple Receipt</Preview>

        <Body style={main}>
            <Container style={container}>
                <Section style={informationTable}>
                    <Row style={informationTableRow}>
                        <Column colSpan={2}>
                            <Section>
                                {Object.keys(data).map((key) => {
                                    const keyString = key;
                                    if (data[keyString]) {
                                        return (
                                            <Row key={keyString}>
                                                <Column style={informationTableColumn}>
                                                    <Text style={informationTableLabel}>{keyString}</Text>
                                                    <Text style={informationTableValue}>
                                                        {data[keyString]}
                                                    </Text>
                                                </Column>
                                            </Row>
                                        );
                                    }

                                    return null;
                                })}
                            </Section>
                        </Column>
                    </Row>
                </Section>
            </Container>
        </Body>
    </Html>
);

const main = {
    fontFamily: '"Helvetica Neue",Helvetica,Arial,sans-serif',
    backgroundColor: "#ffffff",
};

const resetText = {
    margin: "0",
    padding: "0",
    lineHeight: 1.4,
};

const container = {
    margin: "0 auto",
    padding: "20px 0 48px",
    width: "660px",
    maxWidth: "100%",
};

const informationTable = {
    borderCollapse: "collapse" as const,
    borderSpacing: "0px",
    color: "rgb(51,51,51)",
    backgroundColor: "rgb(250,250,250)",
    borderRadius: "3px",
    fontSize: "12px",
};

const informationTableRow = {
    height: "46px",
};

const informationTableColumn = {
    paddingLeft: "20px",
    borderStyle: "solid",
    borderColor: "white",
    borderWidth: "0px 1px 1px 0px",
    height: "44px",
};

const informationTableLabel = {
    ...resetText,
    color: "rgb(102,102,102)",
    fontSize: "10px",
};

const informationTableValue = {
    fontSize: "12px",
    margin: "0",
    padding: "0",
    lineHeight: 1.4,
};
