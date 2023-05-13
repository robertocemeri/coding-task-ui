import styled from 'styled-components';

export const BrokerHomeStyles = styled.div`
    h3 {
    font-size: 16px;
    }

    h6 {
    font-size: 14px;
    }

    .new-quotation-button {
    background-color: green;
    width: 160px;
    text-align: center;
    border-radius: 5px;
    padding: 10px;
    color: white;
    cursor: pointer;
    box-shadow: 0px 0px 8px grey;
    }

    .search-input-container {
    position: relative;
    margin-top: 25px;
    width: 100%;
    }

    .search-input-icon {
    position: absolute;
    top: 0;
    left: 0;
    padding: 6px 9px;
    cursor: pointer;
    }

    .search-input-icon > * {
    height: 18px;
    color: grey;
    }

    .search-input-divider {
    position: absolute;
    top: 0;
    left: 0;
    margin-left: 33px;
    margin-top: 5px;
    height: 25px;
    border-right: 1px solid grey;
    }

    .search-input-content {
    padding: 5px;
    padding-left: 40px;
    width: 100%;
    outline: none;
    border: 1px solid green;
    border-radius: 5px;
    }

    .search-input-results {
    display: block;
    position: absolute;
    top: 40px;
    left: 0px;
    width: 100%;
    background-color: rgba(255, 255, 255, 1);
    border-radius: 5px;
    z-index: 20;
    }

    .search-input-result {
    padding: 5px 10px;
    border-bottom: 1px solid grey;
    border-left: 1px solid grey;
    border-right: 1px solid grey;
    cursor: pointer;
    transition: 0.3s;
    }

    .search-input-result:hover {
    padding-left: 15px;
    background-color: rgba(100, 200, 100, 0.1);
    }

    .search-input-result:first-child {
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    border-top: 1px solid grey;
    }

    .search-input-result:last-child {
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    }

    .stats-field {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    padding: 18px;
    }

    .stats-field__description {
    font-size: 12px;
    font-weight: bold;
    }

    .stats-field__price {
    font-size: 20px;
    font-weight: bold;
    }

    .stats-field__price-subscription {
    font-size: 10px;
    color: grey;
    font-weight: bold;
    }

    .ratio-statistic-custom {
    position: relative;
    margin: auto;
    min-width: 110px;
    max-width: 150px;
    }

    .ratio-statistic-custom-percentage-value {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    }

    .custom-card-section {
    position: relative;
    }

    .go-to-page-button {
    position: absolute;
    right: 35px;
    top: 8px;
    width: 35px;
    height: 35px;
    background-color: green;
    border-radius: 4px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: 0.3s;
    }

    .go-to-page-button:hover {
    background-color: rgb(40, 200, 40);
    }

    .latest-updates-time,
    .latest-updates-contract,
    .latest-updates-amount {
    font-weight: bold;
    }

    .latest-updates-amount {
    float: right;
    }

    .latest-updates-actions > * {
    padding: 0px 10px;
    cursor: pointer;
    }

    .see-more-section {
    margin-top: 5px;
    display: flex;
    padding: 10px 20px;
    justify-content: center;
    gap: 25px;
    cursor: pointer;
    transition: 0.3s;
    }

    .see-more-section:hover {
    gap: 30px;
    background-color: rgba(100, 200, 100, 0.1);
    }

    .see-more-content {
    color: grey;
    font-weight: bold;
    }

    .see-more-arrow {
    color: green;
    }

    .agenda-contract {
    font-weight: bold;
    }
    .agenda-actions {
    display: flex;
    align-items: center;
    }

    .agenda-actions > * {
    padding: 5px;
    font-size: 17px;
    cursor: pointer;
    }

    .latest-updates-card {
    flex: 2;
    }

    .agendas-card {
    flex: 2;
    }

    #stats-info-mobile {
    display: none;
    }

    #client-search-mobile {
    display: none;
    }

    .action-button {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 25px;
    width: 30px;
    cursor: pointer;
    border: 1px solid grey;
    border-radius: 3px;
    }

    @media (max-width: 600px) {
    #stats-info {
        display: none;
    }

    #stats-info-mobile {
        display: block;
    }

    #client-search {
        display: none;
    }

    #client-search-mobile {
        display: block;
    }

    .custom-table {
        display: block;
        overflow-x: auto;
    }

    .custom-card-body {
        width: calc(100vw - 100px);
    }

    .ratio-statistic-custom {
        max-width: 200px;
    }
    }
`;
