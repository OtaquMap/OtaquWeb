import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  width: 400px;
  height: 100vh;
  background: #101148;
  padding: 20px;
  flex-shrink: 0;
`;

export const ButtonContainer = styled.div`
  position: absolute;
  display: flex;
  gap: 20px;
  left: 33px;
  top: 105px;
`;

export const SavedRoutesButton = styled.button`
  width: 160px;
  height: 96px;
  background: #d1c1ff;
  border-radius: 15px;
  border: none;
  cursor: pointer;

  font-family: 'Gothic A1';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 25px;
  text-align: center;
  color: #101148;

  &:hover {
    opacity: 0.9;
  }
`;

export const FavoritePlacesButton = styled.button`
  width: 155px;
  height: 96px;
  background: #fff5d5;
  border-radius: 15px;
  border: none;
  cursor: pointer;

  font-family: 'Gothic A1';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 25px;
  text-align: center;
  color: #101148;

  &:hover {
    opacity: 0.9;
  }
`;

// 최근 검색한 장소 섹션
export const RecentSearchesContainer = styled.div`
  position: relative; // 컨테이너를 추가하여 박스와 리스트를 함께 관리
`;

export const RecentSearchesTitle = styled.h2`
  position: absolute;
  white-space: nowrap; // 줄바꿈 방지
  left: 55px;
  top: 370px;
  font-family: 'Gothic A1';
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 25px;
  color: #cccccc;
`;

export const RecentSearchesBox = styled.div`
  position: absolute;
  width: 338px;
  height: 202px;
  left: 32px;
  top: 410px;
  background: #252660;
  border-radius: 25px;
  filter: blur(5px);
`;

export const RecentSearchList = styled.div`
  position: absolute;
  width: 178px;
  left: 61px;
  top: 429px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  z-index: 1;
`;

export const RecentSearchItem = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  height: 25px;
`;

export const DeleteButton = styled.button`
  position: absolute;
  left: 5px;
  width: 15px;
  height: 15px;
  border: none;
  outline: none;
  cursor: pointer;
  background: url('/src/assets/search_delete.png') no-repeat center / contain;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  &:focus {
    // 추가
    outline: none;
  }
`;

export const SearchText = styled.span`
  margin-left: 25px;
  font-family: 'Gothic A1';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 25px;
  color: #cccccc;
  white-space: nowrap; // 줄바꿈 방지만 유지
`;

//추천 3개
export const RecommendationsContainer = styled.div`
  position: absolute;
  width: 296px;
  left: 55px;
  top: 215px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const RecommendationItem = styled.div`
  box-sizing: border-box;
  width: 296px;
  height: 31px;
  border: 1px solid #d1c1ff;
  border-radius: 20px;
  padding: 5px 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: rgba(209, 193, 255, 0.1);
  }
`;

export const RecommendationText = styled.span`
  font-family: 'Gothic A1';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: #ffffff;
`;
