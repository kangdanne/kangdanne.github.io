import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import {
  sectionTitleFont,
  mediumFontStyle,
  defaultFontStyle,
  defaultFontSize,
} from '../../../styles/mixin';

export default function OtherExperience() {
  const [otherExp, setOtherExp] = useState([]);

  useEffect(() => {
    fetch(`/data/OtherExperienceData.json`)
      .then(data => data.json())
      .then(data => setOtherExp(data));
  }, []);

  return (
    <SectionWrap>
      <SectionTitle>
        Other
        <br />
        Experience
      </SectionTitle>
      <SlideFrame>
        <OtherExpList>
          {otherExp &&
            otherExp.map(
              (
                {
                  period,
                  otherExpImg,
                  otherExpTitle,
                  linkInfo,
                  mainDiscription,
                  subDiscription,
                },
                idx
              ) => {
                return (
                  <OtherExpContent key={idx}>
                    <OtherExpImg>
                      <img alt={otherExpTitle} src={otherExpImg} />
                    </OtherExpImg>
                    <TextWrap>
                      <Text>{period}</Text>
                      {linkInfo && <Text>{linkInfo.linkText}</Text>}
                      <Text>{otherExpTitle}</Text>
                      {mainDiscription && <Text>{mainDiscription}</Text>}
                      {subDiscription && <Text>{subDiscription}</Text>}
                    </TextWrap>
                  </OtherExpContent>
                );
              }
            )}
        </OtherExpList>
      </SlideFrame>
    </SectionWrap>
  );
}

const SectionWrap = styled.section`
  position: relative;
`;

const SectionTitle = styled.h3`
  width: 1000px;
  margin: 200px auto;
  ${sectionTitleFont}
`;

const SlideFrame = styled.div`
  position: absolute;
  right: 0;
  width: 1000px;
  height: 600px;
  margin-left: 200px;
  overflow: hidden;
`;

const OtherExpList = styled.ul`
  width: 1200px;
`;

const OtherExpContent = styled.li`
  float: left;
  width: 400px;
  height: 200px;
`;

const OtherExpImg = styled.div`
  width: 400px;
  height: 300px;
  border: 1px solid #e9e9e9;
  overflow: hidden;
  margin-bottom: 10px;

  img {
    width: 100%;
    height: auto;
  }
`;

const TextWrap = styled.div`
  width: 200px;
`;

const Text = styled.p`
  margin-bottom: 10px;
  ${defaultFontStyle}
  ${defaultFontSize}
`;
