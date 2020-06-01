import Header from "../Header/Header";
import Content from "../Content/Content";
import TopContent from "../Content/TopContent/TopContent";
import BottomContent from "../Content/BottomContent/BottomContent";
import React from "react";

export default function BasePage(prop) {
    return (
        <>
            <Header/>
            {prop.breadcumb}
            <Content>
                <TopContent>
                    <h1>{prop.title}</h1>
                </TopContent>
                <BottomContent
                    large={!!prop.cardsLarge}
                    search={prop.search}
                    setSearch={prop.setSearch}
                    cards={prop.cards}
                />
            </Content>
        </>
    );
}