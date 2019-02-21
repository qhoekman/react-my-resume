import { Document, Image, Page, StyleSheet, Text, View } from '@react-pdf/renderer';
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
  image: {
    width: 128,
    margin: 10,
    border: '1 solid #2a3f4b',
    borderRadius: 100
  },
  icon_container: {
    textAlign: 'center',
    paddingLeft: 58,
    width: 128
  },
  small_icon: {
    width: 12,
    height: 12,
    marginRight: 5
  },
  icon: {
    marginTop: -32,
    width: 32,
    padding: 7
  },
  circle: {
    padding: 10,
    height: 32,
    width: 32,
    borderRadius: 100,
    backgroundColor: '#2a3f4b'
  },
  sidebar: {
    padding: 20,

    backgroundColor: '#cdd1d7'
  },
  sidebar_content: {
    marginTop: 20,
    paddingTop: 17,
    marginRight: -20,
    borderRight: '3 solid #f1592a'
  },
  subject: {
    width: 150,
    padding: 10,
    textAlign: 'center'
  },
  subject_title: {
    fontSize: 14,
    color: '#000',
    fontFamily: 'Lato',
    paddingBottom: 5
  },
  subject_content: {
    textAlign: 'left'
  },
  section: {
    padding: 10,
    flex: 1
  },
  header: {
    paddingBottom: 52
  },
  pagetitle: {
    paddingTop: 30,
    paddingBottom: 20,
    fontSize: 20
  },
  name: {
    fontSize: 32,
    paddingBottom: 5
  },
  contactdetails: {
    paddingRight: 10,
    paddingBottom: 0
  },
  timeline_item: {
    display: 'flex',
    flexDirection: 'row',
    height: 38,
    marginBottom: -7
  },
  timeline_bullet: {
    width: 32
  },
  interest_title: {
    padding: '5 0 3 0'
  },
  progressbar_bg: {
    height: 12,
    width: 125,
    backgroundColor: '#2a3f4b'
  },
  progressbar_fg: {
    height: 12,
    width: '40%',
    backgroundColor: '#f1592a'
  },
  tag: {
    padding: '8 8 5 8',
    margin: 5,
    fontSize: 12,
    fontWeight: 'bold',
    borderRadius: 100,
    color: '#fff',
    backgroundColor: '#2a3f4b'
  },
  birthday: {
    fontSize: 10
  },
  company: {
    fontFamily: 'Roboto-Bold'
  },
  strong: {
    fontFamily: 'Roboto-Bold'
  },
  row: { display: 'flex', flexDirection: 'row' }
});

// Create Document Component
export const MyDocument = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.sidebar}>
        <Image style={styles.image} src={`assets/photo.png`} />
        <View style={styles.sidebar_content}>
          <View style={styles.icon_container}>
            <View style={styles.circle} />
            <Image style={styles.icon} src="assets/icon-tag.png" />
          </View>
          <View style={styles.subject}>
            <Text style={styles.subject_title}>OVER MIJ</Text>
            <Text style={[styles.subject_content, { marginTop: 5, marginLeft: -10, marginRight: -10 }]}>
              Ik zie mijzelf als een <Text style={styles.strong}>leergierig</Text> persoon met passie voor de techniek.
            </Text>
            <Text style={[styles.subject_content, { marginLeft: -10, marginRight: -10 }]}>
              Ik hou van de <Text style={styles.strong}>innoverende</Text> wereld van de IT.
            </Text>
            <Text style={[styles.subject_content, { marginTop: 5, marginLeft: -10, marginRight: -10 }]}>
              <Text style={styles.strong}>Communicatie</Text> is voor mij erg belangrijk en dat doe ik het liefst in een{' '}
              <Text style={styles.strong}>Scrum team</Text>.
            </Text>
            <Text style={[styles.subject_content, { marginTop: 5, marginLeft: -10, marginRight: -10 }]}>
              Wel zit ik met een <Text style={styles.strong}>visuele beperking</Text>, maar dat hindert mij niet om met
              volle
            </Text>
            <Text style={[styles.subject_content, { marginLeft: -10, marginRight: -10 }]}>
              <Text style={styles.strong}>motivatie</Text> en <Text style={styles.strong}>discipline</Text> aan de slag
              te gaan.
            </Text>
            <Text style={[styles.subject_content, { marginTop: 5, marginLeft: -10, marginRight: -10 }]}>
              In mijn vrije tijd ben ik graag bezig met <Text style={styles.strong}>sporten</Text>,{' '}
              <Text style={styles.strong}>software ontwikkeling</Text>, <Text style={styles.strong}>tv series</Text> en{' '}
              <Text style={styles.strong}>games</Text>.
            </Text>
          </View>
          <View style={styles.icon_container}>
            <View style={styles.circle} />
            <Image style={styles.icon} src="assets/icon-puzzle.png" />
          </View>
          <View style={styles.subject}>
            <Text style={styles.subject_title}>INTERESSES</Text>
            <View style={styles.subject_content}>
              <Text style={styles.interest_title}>Front-end Development</Text>
              <View style={styles.progressbar_bg}>
                <View style={[styles.progressbar_fg, { width: '85%' }]} />
              </View>
            </View>
            <View style={styles.subject_content}>
              <Text style={styles.interest_title}>Back-end Development</Text>
              <View style={styles.progressbar_bg}>
                <View style={[styles.progressbar_fg, { width: '75%' }]} />
              </View>
            </View>
            <View style={styles.subject_content}>
              <Text style={styles.interest_title}>Dev-Ops Engineering</Text>
              <View style={styles.progressbar_bg}>
                <View style={[styles.progressbar_fg, { width: '70%' }]} />
              </View>
            </View>
            <View style={styles.subject_content}>
              <Text style={styles.interest_title}>Security Engineering</Text>
              <View style={styles.progressbar_bg}>
                <View style={[styles.progressbar_fg, { width: '69%' }]} />
              </View>
            </View>
            <View style={styles.subject_content}>
              <Text style={styles.interest_title}>Cloud Architect</Text>
              <View style={styles.progressbar_bg}>
                <View style={[styles.progressbar_fg, { width: '67%' }]} />
              </View>
            </View>
            <View style={styles.subject_content}>
              <Text style={styles.interest_title}>System Engineering</Text>
              <View style={styles.progressbar_bg}>
                <View style={[styles.progressbar_fg, { width: '60%' }]} />
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.section}>
        <View style={styles.header}>
          <Text style={styles.pagetitle}>CURRICULUM VITAE</Text>
          <Text style={styles.name}>
            Quido Hoekman <Text style={styles.birthday}>van 03-08-1991</Text>
          </Text>
          <View style={styles.row}>
            <Image style={styles.small_icon} src="assets/icon-phone.png" />

            <Text style={styles.contactdetails}>(+31)6 55887578</Text>
            <Image style={styles.small_icon} src="assets/icon-mail.png" />

            <Text style={styles.contactdetails}> quido@qhoekman.nl</Text>
          </View>
          <View style={styles.row}>
            <Image style={styles.small_icon} src="assets/icon-location-pin.png" />
            <Text>Stationsstraat 85. 7311 NP, Apeldoorn</Text>
          </View>
        </View>
        <View>
          <View style={{ display: 'flex', flexDirection: 'row', marginBottom: 20 }}>
            <View style={(styles.icon_container, { paddingLeft: 0 })}>
              <View style={styles.circle} />
              <Image style={styles.icon} src="assets/icon-work.png" />
            </View>
            <View style={(styles.subject, { textAlign: 'left', paddingTop: 8, paddingLeft: 10 })}>
              <Text style={styles.subject_title}>WERKERVARING</Text>
            </View>
          </View>
          <View style={styles.timeline_item}>
            <View style={{ width: 64, padding: 5, paddingTop: 0 }}>
              <Text>Sep 2015</Text>
              <Text>Mei 2019</Text>
            </View>

            <View style={{}}>
              <Image style={styles.timeline_bullet} src="assets/timeline-bullet.png" />
            </View>
            <View style={{ padding: 5, paddingTop: 0 }}>
              <Text style={styles.company}>Thinkwise Software</Text>
              <Text>Front-end Developer</Text>
            </View>
          </View>
          <View style={styles.timeline_item}>
            <View style={{ width: 64, padding: 5, paddingTop: 0 }}>
              <Text>Feb 2013</Text>
              <Text>Juli 2013</Text>
            </View>

            <View style={{}}>
              <Image style={styles.timeline_bullet} src="assets/timeline-bullet.png" />
            </View>
            <View style={{ padding: 5, paddingTop: 0 }}>
              <Text style={styles.company}>Pinkroccade Healthcare</Text>
              <Text>Software Engineer</Text>
            </View>
          </View>
          <View style={styles.timeline_item}>
            <View style={{ width: 64, padding: 5, paddingTop: 0 }}>
              <Text>Sep 2010</Text>
              <Text>Feb 2011</Text>
            </View>

            <View style={{}}>
              <Image style={styles.timeline_bullet} src="assets/timeline-bullet.png" />
            </View>
            <View style={{ padding: 5, paddingTop: 0 }}>
              <Text style={styles.company}>SOCS, Air Operations Control Station</Text>
              <Text>Junior Software Engineer</Text>
            </View>
          </View>
          <View style={styles.timeline_item}>
            <View style={{ width: 64, padding: 5, paddingTop: 0 }}>
              <Text>Jan 2008</Text>
              <Text>Aug 2009</Text>
            </View>

            <View style={{}}>
              <Image style={styles.timeline_bullet} src="assets/timeline-bullet-last.png" />
            </View>
            <View style={{ padding: 5, paddingTop: 0 }}>
              <Text style={styles.company}>Bronsco ICT</Text>
              <Text>Servicedeskmedewerker ICT en Web Developer</Text>
            </View>
          </View>

          <View style={{ display: 'flex', flexDirection: 'row', marginTop: 13, marginBottom: 20 }}>
            <View style={(styles.icon_container, { paddingLeft: 0 })}>
              <View style={styles.circle} />
              <Image style={styles.icon} src="assets/icon-library.png" />
            </View>

            <View style={(styles.subject, { textAlign: 'left', paddingTop: 8, paddingLeft: 10 })}>
              <Text style={styles.subject_title}>EDUCATIE</Text>
            </View>
          </View>
          <View style={styles.timeline_item}>
            <View style={{ width: 64, padding: 5, paddingTop: 0 }}>
              <Text>Sep 2011</Text>
              <Text>Mrt 2016</Text>
            </View>

            <View style={{}}>
              <Image style={styles.timeline_bullet} src="assets/timeline-bullet.png" />
            </View>
            <View style={{ padding: 5, paddingTop: 0 }}>
              <Text style={styles.company}>Hogeschool van Arnhem en Nijmegen</Text>
              <Text>Informatica Bachelor Degree</Text>
            </View>
          </View>
          <View style={styles.timeline_item}>
            <View style={{ width: 64, padding: 5, paddingTop: 0 }}>
              <Text>Sep 2009</Text>
              <Text>Juli 2011</Text>
            </View>

            <View style={{}}>
              <Image style={styles.timeline_bullet} src="assets/timeline-bullet.png" />
            </View>
            <View style={{ padding: 5, paddingTop: 0 }}>
              <Text style={styles.company}>ROC Aventus</Text>
              <Text>ICT Beheer MBO4</Text>
            </View>
          </View>
          <View style={styles.timeline_item}>
            <View style={{ width: 64, padding: 5, paddingTop: 0 }}>
              <Text>Sep 2007</Text>
              <Text>Juli 2009</Text>
            </View>

            <View style={{}}>
              <Image style={styles.timeline_bullet} src="assets/timeline-bullet-last.png" />
            </View>
            <View style={{ padding: 5, paddingTop: 0 }}>
              <Text style={styles.company}>REA-College Ermelo</Text>
              <Text>Servicedeskmedewerker ICT</Text>
            </View>
          </View>

          <View style={{ display: 'flex', flexDirection: 'row', marginTop: 13, marginBottom: 20 }}>
            <View style={(styles.icon_container, { paddingLeft: 0 })}>
              <View style={styles.circle} />
              <Image style={styles.icon} src="assets/icon-thumbs-up.png" />
            </View>
            <View style={(styles.subject, { textAlign: 'left', paddingTop: 8, paddingLeft: 10 })}>
              <Text style={styles.subject_title}>PASSIE VOOR</Text>
            </View>
          </View>
          <View style={styles.row}>
            <Text style={styles.tag}>Linux</Text>
            <Text style={styles.tag}>Arch Linux</Text>
            <Text style={styles.tag}>Google Chrome</Text>
            <Text style={styles.tag}>Android</Text>
            <Text style={styles.tag}>Docker</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.tag}>git</Text>
            <Text style={styles.tag}>KDE</Text>
            <Text style={styles.tag}>ZSH</Text>
            <Text style={styles.tag}>VSCode</Text>
            <Text style={styles.tag}>Golang</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.tag}>Elixir</Text>
            <Text style={styles.tag}>NodeJS</Text>
            <Text style={styles.tag}>NPM</Text>
            <Text style={styles.tag}>Yarn</Text>
            <Text style={styles.tag}>HTML5</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.tag}>CSS3</Text>
            <Text style={styles.tag}>JavaScript</Text>
            <Text style={styles.tag}>TypeScript</Text>
            <Text style={styles.tag}>Webpack</Text>
            <Text style={styles.tag}>Gatsby</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.tag}>React</Text>
            <Text style={styles.tag}>React Native</Text>
            <Text style={styles.tag}>Redux</Text>
            <Text style={styles.tag}>GraphQL</Text>
            <Text style={styles.tag}>Electron</Text>
          </View>
        </View>
      </View>
      <View
        style={[
          styles.row,
          {
            position: 'absolute',
            top: '98%',
            height: 20,
            width: '100%',
            backgroundColor: '#f1592a',
            color: '#fff',
            textAlign: 'center'
          }
        ]}
      >
        <Text>
          Bedankt voor het lezen van mijn CV, bekijk ook mijn website op <Text style={styles.strong}>qhoekman.nl</Text>
        </Text>
      </View>
    </Page>
  </Document>
);
