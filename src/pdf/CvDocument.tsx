import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
} from '@react-pdf/renderer'
import { profile } from '../data/profile'

const styles = StyleSheet.create({
  page: {
    padding: 40,
    fontFamily: 'Helvetica',
    fontSize: 9,
    color: '#1e293b',
    lineHeight: 1.45,
  },
  header: {
    marginBottom: 14,
    borderBottomWidth: 2,
    borderBottomColor: '#0ea5e9',
    paddingBottom: 10,
  },
  name: {
    fontSize: 20,
    fontFamily: 'Helvetica-Bold',
    color: '#0f172a',
    marginBottom: 2,
  },
  title: {
    fontSize: 11,
    color: '#0ea5e9',
    marginBottom: 6,
  },
  contactItem: {
    fontSize: 8,
    color: '#64748b',
    marginBottom: 2,
  },
  section: {
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 10,
    fontFamily: 'Helvetica-Bold',
    color: '#0ea5e9',
    textTransform: 'uppercase',
    letterSpacing: 0.8,
    marginBottom: 6,
    borderBottomWidth: 1,
    borderBottomColor: '#e2e8f0',
    paddingBottom: 3,
  },
  summary: {
    fontSize: 9,
    color: '#334155',
    lineHeight: 1.5,
    marginBottom: 5,
  },
  skillRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 2,
  },
  skillName: { fontSize: 8, color: '#334155', flex: 1 },
  skillYears: { fontSize: 8, color: '#64748b' },
  jobHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 2,
  },
  jobRole: {
    fontFamily: 'Helvetica-Bold',
    fontSize: 9,
    color: '#0f172a',
  },
  jobCompany: { fontSize: 8, color: '#0ea5e9', marginBottom: 2 },
  jobPeriod: { fontSize: 8, color: '#64748b' },
  subLabel: {
    fontFamily: 'Helvetica-Bold',
    fontSize: 8,
    color: '#475569',
    marginTop: 3,
    marginBottom: 2,
  },
  bullet: { fontSize: 8, color: '#475569', marginBottom: 1, paddingLeft: 8 },
  eduSchool: {
    fontFamily: 'Helvetica-Bold',
    fontSize: 9,
    color: '#0f172a',
  },
  eduMeta: { fontSize: 8, color: '#64748b', marginBottom: 1 },
  projectName: {
    fontFamily: 'Helvetica-Bold',
    fontSize: 9,
    color: '#0f172a',
    marginBottom: 1,
  },
  projectDesc: { fontSize: 8, color: '#475569', marginBottom: 2 },
  projectTech: { fontSize: 7, color: '#0ea5e9' },
})

const skillGroups = [
  { title: 'Frontend', items: profile.skills.frontend },
  { title: 'Mobile', items: profile.skills.mobile },
  { title: 'Backend', items: profile.skills.backend },
  { title: 'DevOps & Deployment', items: profile.skills.devops },
  { title: 'Security', items: profile.skills.security },
  { title: 'Tools', items: profile.skills.tools },
]

export function CvDocument() {
  const filename = profile.name.replace(/\s+/g, '_')

  return (
    <Document title={`${profile.name} - CV`} author={profile.name}>
      <Page size="A4" style={styles.page}>
        <View style={styles.header}>
          <Text style={styles.name}>{profile.name}</Text>
          <Text style={styles.title}>{profile.title}</Text>
          <Text style={styles.contactItem}>{profile.address}</Text>
          {profile.emails.map((email) => (
            <Text key={email} style={styles.contactItem}>
              {email}
            </Text>
          ))}
          {profile.phones.map((phone) => (
            <Text key={phone} style={styles.contactItem}>
              {phone}
            </Text>
          ))}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>About</Text>
          {profile.summary.map((paragraph) => (
            <Text key={paragraph} style={styles.summary}>
              {paragraph}
            </Text>
          ))}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Technical Experience</Text>
          {profile.technicalExperience.map((item) => (
            <View key={item.skill} style={styles.skillRow}>
              <Text style={styles.skillName}>{item.skill}</Text>
              <Text style={styles.skillYears}>{item.years}</Text>
            </View>
          ))}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Skills</Text>
          {skillGroups.map((group) => (
            <Text key={group.title} style={styles.summary}>
              {group.title}: {group.items.join(', ')}
            </Text>
          ))}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Experience</Text>
          {profile.experience.map((job) => (
            <View key={`${job.company}-${job.period}`} style={{ marginBottom: 8 }} wrap={false}>
              <View style={styles.jobHeader}>
                <Text style={styles.jobRole}>{job.role}</Text>
                <Text style={styles.jobPeriod}>{job.period}</Text>
              </View>
              <Text style={styles.jobCompany}>
                {job.company} · {job.duration}
              </Text>
              {job.duties.length > 0 && (
                <>
                  <Text style={styles.subLabel}>Duties</Text>
                  {job.duties.map((d) => (
                    <Text key={d} style={styles.bullet}>
                      • {d}
                    </Text>
                  ))}
                </>
              )}
              {job.accomplishments.length > 0 && (
                <>
                  <Text style={styles.subLabel}>Accomplishments</Text>
                  {job.accomplishments.map((a) => (
                    <Text key={a} style={styles.bullet}>
                      • {a}
                    </Text>
                  ))}
                </>
              )}
            </View>
          ))}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Education</Text>
          {profile.education.map((entry) => (
            <View key={entry.school} style={{ marginBottom: 6 }}>
              <Text style={styles.eduSchool}>{entry.school}</Text>
              {'degree' in entry && entry.degree && (
                <Text style={styles.eduMeta}>{entry.degree}</Text>
              )}
              <Text style={styles.eduMeta}>
                {entry.location} · {entry.period}
              </Text>
            </View>
          ))}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Projects</Text>
          {profile.projects.map((project) => (
            <View key={project.name} style={{ marginBottom: 6 }}>
              <Text style={styles.projectName}>{project.name}</Text>
              <Text style={styles.projectDesc}>{project.description}</Text>
              <Text style={styles.projectTech}>{project.tech.join(' · ')}</Text>
            </View>
          ))}
        </View>

        <Text
          style={{ fontSize: 7, color: '#94a3b8', marginTop: 6 }}
          render={({ pageNumber, totalPages }) =>
            `${filename}_CV · Page ${pageNumber} of ${totalPages}`
          }
          fixed
        />
      </Page>
    </Document>
  )
}
