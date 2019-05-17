import { Image, Page, StyleSheet, Text, View } from '@react-pdf/renderer';
import React from 'react';

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    fontSize: 12,
    fontFamily: 'Roboto',
    color: '#22292f',
    backgroundColor: '#e0e4e9'
  },
  section: {
    padding: 20,

    flex: 1
  },
  segment: {
    backgroundColor: 'white',
    borderBottom: '1 solid grey',
    borderRadius: 1
  },
  row: {
    display: 'flex',
    fontFamily: 'Roboto-Bold',
    flexDirection: 'row',
    color: 'black',
    fontSize: 14
  },
  subrow: {
    fontFamily: 'Roboto',
    fontSize: 12,
    backgroundColor: '#f6f6f6',
    border: '1 solid #ededed',
    flex: 1
  },
  expand_arrow: {
    width: 14,
    height: 14,
    margin: 5
  },

  head: {
    padding: 5,
    fontFamily: 'Roboto-Bold',
    backgroundColor: '#2a3f4b',
    color: 'white'
  },
  col: {
    display: 'flex',
    flexDirection: 'row',

    padding: 5
  },
  circle: {
    padding: 2,
    height: 14,
    width: 14
  },
  year: {
    fontFamily: 'Roboto-Bold'
  }
});

const data = [
  { skill: 'HTML5', years: 5, rating: 4 },
  {
    skill: 'CSS',
    siblings: [
      { skill: 'Compose', years: 1, rating: 3 },
      { skill: 'LESS', years: 1.5, rating: 4 },
      { skill: 'SASS', years: 2.5, rating: 4 },
      { skill: 'SCSS', years: 2.5, rating: 4 }
    ],
    years: 5,
    rating: 4
  },
  {
    skill: 'Frameworks',
    siblings: [
      { skill: 'Angular 7', years: 1.5, rating: 3 },
      { skill: 'AngularJS', years: 1, rating: 3 },
      { skill: 'Ember', years: 0.5, rating: 1 },
      { skill: 'Polymer', years: 0.5, rating: 2 },
      { skill: 'Vue', years: 1.5, rating: 3 }
    ],
    years: 4,
    rating: 4
  },
  {
    skill: 'Libraries',
    siblings: [
      { skill: 'Lodash', years: 1.5, rating: 3 },
      { skill: 'React', years: 3, rating: 4 },
      { skill: 'Redux', years: 2.5, rating: 3 },
      { skill: 'RXJS', years: 2, rating: 3 }
    ],
    years: 4,
    rating: 4
  },
  {
    skill: 'Component Frameworks',
    siblings: [{ skill: 'Ionic', years: 1, rating: 3 }, { skill: 'Material Design', years: 1.5, rating: 3 }],
    years: 1.5,
    rating: 3
  },
  {
    skill: 'Native / Hybrid Apps',
    siblings: [
      { skill: 'Android', years: 2, rating: 2 },
      { skill: 'Cordova', years: 3.5, rating: 3 },
      { skill: 'Electron', years: 3.5, rating: 4 },
      { skill: 'iOS (Objective C)', years: 1.5, rating: 2 },
      { skill: 'React Native', years: 1, rating: 2 }
    ],
    years: 1.5,
    rating: 3
  },
  {
    skill: 'Standaarden',
    siblings: [
      { skill: 'EcmaScript5', years: 3.5, rating: 4 },
      { skill: 'EcmaScript6', years: 2.5, rating: 4 },
      { skill: 'EcmaScript7', years: 1.5, rating: 4 },
      { skill: 'JavaScript', years: 5, rating: 4 },
      { skill: 'TypeScript', years: 3, rating: 4 }
    ],
    years: 5,
    rating: 4
  },
  {
    skill: 'Server-side Rendering',
    siblings: [
      { skill: 'ExpressJS', years: 1.5, rating: 3 },
      { skill: 'GatsbyJS', years: 1, rating: 3 },
      { skill: 'NextJS', years: 1, rating: 3 }
    ],
    years: 1.5,
    rating: 3
  }
];

const toolingData = [
  {
    skill: 'Development Tools',
    siblings: [
      { skill: 'git', years: 5, rating: 3 },
      { skill: 'NPM', years: 4, rating: 4 },
      { skill: 'TSLint', years: 2.5, rating: 4 },
      { skill: 'Yarn', years: 2, rating: 4 },
      { skill: 'Vagrant', years: 1, rating: 2 }
    ],
    years: 5,
    rating: 4
  },
  {
    skill: 'Testing Tools',
    siblings: [
      { skill: 'Jasmine', years: 1, rating: 2 },
      { skill: 'Jest', years: 2, rating: 3 },
      { skill: 'Karma', years: 1, rating: 2 },
      { skill: 'Puppeteer', years: 1, rating: 3 }
    ],
    years: 5,
    rating: 4
  },
  {
    skill: 'Build Tools',
    siblings: [
      { skill: 'Babel', years: 2, rating: 2 },
      { skill: 'Grunt', years: 1, rating: 3 },
      { skill: 'Gulp', years: 2, rating: 3 },
      { skill: 'Webpack', years: 2, rating: 3 }
    ],
    years: 2.5,
    rating: 3
  },
  {
    skill: 'Deployment Tools',
    siblings: [
      { skill: 'Docker', years: 2.5, rating: 2 },
      { skill: 'Fastlane', years: 2, rating: 3 },
      { skill: 'Jenkins', years: 2, rating: 3 },
      { skill: 'Netlify', years: 1, rating: 3 },
      { skill: 'PM2', years: 1, rating: 2 },
      { skill: 'Octopus', years: 1, rating: 1 }
    ],
    years: 2.5,
    rating: 2
  },
  {
    skill: 'Agile Tools',
    siblings: [
      { skill: 'Azure DevOps / TFS', years: 3, rating: 2 },
      { skill: 'Jira', years: 1, rating: 1 },
      { skill: 'Trello', years: 1, rating: 3 }
    ],
    years: 2.5,
    rating: 3
  },
  {
    skill: 'Linux',
    siblings: [
      { skill: "Arch distro's", years: 3, rating: 3 },
      { skill: 'Bash scripting', years: 1, rating: 2 },
      { skill: "Debian distro's", years: 12, rating: 3 },
      { skill: 'Apache', years: 7, rating: 2 },
      { skill: 'NGINX', years: 5, rating: 3 }
    ],
    years: 12,
    rating: 3
  },
  {
    skill: 'Cloud',
    siblings: [{ skill: 'AWS', years: 0.5, rating: 1 }, { skill: 'Azure', years: 0.5, rating: 1 }],
    years: 0.5,
    rating: 2
  }
];

const backendSkillsData = [
  {
    skill: 'Programmeertalen',
    siblings: [
      { skill: 'C#', years: 1, rating: 3 },
      { skill: 'Elixir', years: 0.5, rating: 1 },
      { skill: 'Golang', years: 0.5, rating: 1 },
      { skill: 'Java', years: 2, rating: 2 },
      { skill: 'NodeJS', years: 4, rating: 3 },
      { skill: 'Ruby', years: 2, rating: 2 }
    ],
    years: 4,
    rating: 2
  },
  {
    skill: 'Frameworks',
    siblings: [
      { skill: '.NET Core', years: 1, rating: 3 },
      { skill: 'ExpressJS', years: 4, rating: 3 },
      { skill: 'Phoenix', years: 0.5, rating: 1 },
      { skill: 'Rails', years: 1, rating: 2 },
      { skill: 'Spring', years: 2, rating: 1 }
    ],
    years: 4,
    rating: 2
  },
  {
    skill: 'Databases / Graphs / Key stores',
    siblings: [
      { skill: 'MongoDB', years: 1, rating: 2 },
      { skill: 'MYSQL', years: 2, rating: 2 },
      { skill: 'Postgres', years: 1.5, rating: 2 },
      { skill: 'Redis', years: 1, rating: 2 },
      { skill: 'SQLite', years: 1, ratingx: 2 },
      { skill: 'SQLServer', years: 3, rating: 2 }
    ],
    years: 4,
    rating: 2
  },
  {
    skill: 'API Integrations',
    siblings: [
      { skill: 'Github', years: 1, rating: 2 },
      { skill: 'Shopify', years: 0.5, rating: 2 },
      { skill: 'Stripe', years: 0.5, rating: 2 },
      { skill: 'Facebook', years: 0.5, rating: 2 },
      { skill: 'Twitter', years: 0.5, rating: 2 },
      { skill: 'Elasticsearch', years: 0.5, rating: 2 }
    ],
    years: 4,
    rating: 2
  },
  {
    skill: 'ORM',
    siblings: [
      { skill: 'Ecto', years: 0.5, rating: 1 },
      { skill: 'Entity Framework', years: 1, rating: 2 },
      { skill: 'gORM', years: 0.5, rating: 1 },
      { skill: 'Hibernate', years: 2, rating: 2 },
      { skill: 'TypeORM', years: 1.5, rating: 3 }
    ],
    years: 4,
    rating: 2
  },
  { skill: 'GraphQL', years: 2, rating: 3 },
  { skill: 'OData', years: 3.5, rating: 2 },
  { skill: 'SOAP', years: 2, rating: 2 },
  { skill: 'OpenAPI', years: 1, rating: 2 }
];

const KnoweldgeMatrix = () => (
  <Page size="A4" style={styles.page}>
    <View style={styles.section}>
      <View style={styles.row}>
        <Text style={[styles.head, { flex: 1 }]}>Front-end Skills</Text>
      </View>
      {data.map(item => (
        <View style={styles.segment} wrap={false}>
          <View style={styles.row}>{SkillRow(item.skill, item.years, item.rating, item.siblings)}</View>
          <View style={styles.row}>
            {item.siblings && <Image style={styles.expand_arrow} src={'assets/arrow.png'} />}
            {item.siblings &&
              item.siblings.map(subitem => (
                <View style={styles.subrow}>{SkillRow(subitem.skill, subitem.years, subitem.rating)}</View>
              ))}
          </View>
        </View>
      ))}
      <Text break={true} style={{ paddingTop: 20 }} />
      <View style={styles.row}>
        <Text style={[styles.head, { flex: 1 }]}>Back-end Skills</Text>
      </View>
      {backendSkillsData.map(item => (
        <View style={styles.segment} wrap={false}>
          <View style={styles.row}>{SkillRow(item.skill, item.years, item.rating, item.siblings)}</View>
          <View style={styles.row}>
            {item.siblings && <Image style={styles.expand_arrow} src={'assets/arrow.png'} />}
            {item.siblings &&
              item.siblings.map(subitem => (
                <View style={styles.subrow}>{SkillRow(subitem.skill, subitem.years, subitem.rating)}</View>
              ))}
          </View>
        </View>
      ))}
      <Text break={true} style={{ paddingTop: 20 }} />

      <View style={styles.row}>
        <Text style={[styles.head, { flex: 1 }]}>Tooling</Text>
      </View>
      {toolingData.map(item => (
        <View style={styles.segment} wrap={false}>
          <View style={styles.row}>{SkillRow(item.skill, item.years, item.rating, item.siblings)}</View>
          <View style={styles.row}>
            {item.siblings && <Image style={styles.expand_arrow} src={'assets/arrow.png'} />}
            {item.siblings &&
              item.siblings.map(subitem => (
                <View style={styles.subrow}>{SkillRow(subitem.skill, subitem.years, subitem.rating)}</View>
              ))}
          </View>
        </View>
      ))}
    </View>
  </Page>
);

const SkillRow = (skill, years, rating, siblings = []) => (
  <React.Fragment>
    <Text style={[styles.col, { flex: 1 }]}>{skill}</Text>
    <Text style={[styles.col, styles.year]}>{years} jaar</Text>
    <View style={[styles.col, { width: '16%' }]}>
      {[...Array(rating)].map(r => (
        <Image key={`rate-${r}`} style={styles.circle} src={'assets/star.png'} />
      ))}
    </View>
  </React.Fragment>
);

export default KnoweldgeMatrix;
