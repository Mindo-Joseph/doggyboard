import React from 'react';
import styles from './css/main.module.css';

function Features() {
  return (
    <div className={styles.moreFeatures}>
      <div className={styles.sectionHeader}>
        <h2>Features</h2>
        <p>
          Select or search for a breed of dog and see the images of the breed.
        </p>
      </div>
      <div className={styles.moreFeaturesContent}>
        <div className={styles.feature}>
          <div className={styles.featureIllustration}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Search_Icon.svg/1024px-Search_Icon.svg.png" alt="Feature Illustration Icon" />
          </div>
          <div className={styles.featureDetails}>
            <h3>Search</h3>
            <p>
              Search for a particular breed by typing in the search bar.
            </p>
          </div>
        </div>
        <div className={styles.feature}>
          <div className={styles.featureIllustration}>
            <img src="https://image.similarpng.com/very-thumbnail/2021/06/Design-of-click-icon-with-hand-cursor.-Hand-is-pushing-the-button.png" alt="Feature Illustration Icon" />
          </div>
          <div className={styles.featureDetails}>
            <h3>Choose a breed</h3>
            <p>
              Press one of the generated buttons representing the breeds to see the
              images of the breed.
            </p>
          </div>
        </div>
        <div className={styles.feature}>
          <div className={styles.featureIllustration}>
            <img src="https://previews.123rf.com/images/fokaspokas/fokaspokas1803/fokaspokas180300333/96943471-simple-eye-icon-white-icon-with-shadow-on-transparent-background-.jpg" alt="Feature Illustration Icon" />
          </div>
          <div className={styles.featureDetails}>
            <h3>View Images</h3>
            <p>
              Checkout the cool dog images of the breed you selected.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Features;
