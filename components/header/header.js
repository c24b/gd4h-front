import {
    Header,
    HeaderBody,
    Service,
    Tool,
    ToolItem,
    HeaderNav,
    Logo,
    NavItem,
    NavSubItem,
    ToolItemGroup,
    MegaNavItem,
    MegaNavSubItem,
} from '@dataesr/react-dsfr';


import React from 'react';

const HeaderWrapper = () => {
    return (
        <Header closeButtonLabel='Close it!'>
            <HeaderBody>
                <Logo splitCharacter={10}>République Française</Logo>
                <Service
                    title="Green Data For Health"
                    description="Outil de recensement des données vertes utiles en Santé Environnement " />
                <Tool>
                    <ToolItemGroup>
                        <ToolItem icon='ri-lock-line' link='/path'>Se connecter</ToolItem>
                        <ToolItem icon='ri-add-circle-line' link='/path'>Langue</ToolItem>
                    </ToolItemGroup>
                </Tool>
            </HeaderBody>
            <HeaderNav>
                <NavItem title='A propos' link='/' />
                <NavItem title='Institutions' link='/institutions' />
                <NavItem title='Jeux de données' link='/jeux-de-donnees' />
                <NavItem title='Référentiels' link='/referentiels' />
            </HeaderNav>
        </Header>
    );
};

export default HeaderWrapper;