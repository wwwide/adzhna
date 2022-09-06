import SC from "styled-components";

export const ActionsWrapper = SC.div`
  margin-top: 40px;
  display: grid;
  justify-content: center;
  grid-template-columns: max-content max-content;
  grid-column-gap: 10px;
`;

export const ConfirmationContainer = SC.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
  font-size: 18px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.4;
  letter-spacing: normal;
  color: #000000;
`;

export const _Message = SC.span`
  color: ${p => p.theme.adzhna.colors.text};
`