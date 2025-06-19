import React from 'react';
import { Heart, Users, BookOpen, Target, Award, Globe, Linkedin, Twitter, Github } from 'lucide-react';

const AboutPage = () => {
  const values = [
    {
      icon: Heart,
      title: 'Beginner-First Approach',
      description: 'Every course, every explanation, every interaction is designed with complete beginners in mind. We never assume prior knowledge.'
    },
    {
      icon: Users,
      title: 'Community-Driven Learning',
      description: 'Learning is better together. Our supportive community ensures no one learns alone or feels left behind.'
    },
    {
      icon: BookOpen,
      title: 'Project-Based Education',
      description: 'Build real projects from day one. Learn by doing, not just watching. Create a portfolio that gets you hired.'
    },
    {
      icon: Target,
      title: 'Career-Focused Outcomes',
      description: 'Every lesson, project, and skill is chosen to help you land your first job in tech. We focus on what employers actually want.'
    }
  ];

  const stats = [
    { number: '15,000+', label: 'Active Learners' },
    { number: '2,000+', label: 'Career Changes' },
    { number: '500+', label: 'Study Groups' },
    { number: '100%', label: 'Free to Start' }
  ];

  const teamMembers = [
    {
      name: 'Sarah Martinez',
      role: 'Founder & CEO',
      bio: 'Former teacher who transitioned to tech at 35. Passionate about making programming accessible to everyone.',
      image: 'https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=2',
      funFact: 'Started coding to help her students build a school website',
      social: {
        linkedin: '#',
        twitter: '#'
      }
    },
    {
      name: 'David Chen',
      role: 'Head of Curriculum',
      bio: 'Senior software engineer with 10+ years experience. Believes in learning through building real projects.',
      image: 'https://images.pexels.com/photos/2741701/pexels-photo-2741701.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=2',
      funFact: 'Has mentored over 200 career changers into tech',
      social: {
        linkedin: '#',
        github: '#'
      }
    },
    {
      name: 'Maria Rodriguez',
      role: 'Community Manager',
      bio: 'Psychology background with expertise in building supportive learning communities. CodeBridge graduate herself!',
      image: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=2',
      funFact: 'Organizes virtual coffee chats that have led to 50+ friendships',
      social: {
        linkedin: '#',
        twitter: '#'
      }
    },
    {
      name: 'James Wilson',
      role: 'Lead Developer',
      bio: 'Full-stack developer who loves creating intuitive learning experiences. Former bootcamp graduate.',
      image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=2',
      funFact: 'Built the entire CodeBridge platform while learning React',
      social: {
        github: '#',
        linkedin: '#'
      }
    },
    {
      name: 'Lisa Park',
      role: 'Student Success Coordinator',
      bio: 'Dedicated to ensuring every learner feels supported. Tracks progress and celebrates every milestone.',
      image: 'https://images.pexels.com/photos/3760854/pexels-photo-3760854.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=2',
      funFact: 'Personally congratulates every student who completes their first project',
      social: {
        linkedin: '#'
      }
    },
    {
      name: 'Alex Thompson',
      role: 'Mentor Coordinator',
      bio: 'Connects learners with the perfect mentors. Former career changer who understands the journey.',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=2',
      funFact: 'Has made over 1,000 successful mentor-student matches',
      social: {
        linkedin: '#',
        twitter: '#'
      }
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
            About CodeBridge
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
            We're on a mission to make tech careers accessible to everyone, regardless of background, 
            age, or prior experience. Your journey to a fulfilling career in technology starts here.
          </p>
        </div>

        <div className="mb-12 sm:mb-16">
          <div className="bg-white rounded-3xl p-6 sm:p-8 lg:p-10 shadow-sm border border-gray-100">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
                  Our Mission
                </h2>
                <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-4 sm:mb-6">
                  We believe that everyone deserves the opportunity to build a rewarding career in technology, 
                  regardless of their starting point. Too many people think they're "not smart enough" or 
                  "too old" to learn programming. We're here to prove them wrong.
                </p>
                <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                  CodeBridge exists to bridge the gap between where you are now and where you want to be. 
                  We provide the structure, community, and support that makes learning to code not just 
                  possible, but enjoyable and sustainable.
                </p>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-6 sm:p-8">
                <Globe className="h-12 w-12 sm:h-16 sm:w-16 text-purple-600 mb-4" />
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">
                  Global Impact
                </h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  From teachers to truck drivers, from stay-at-home parents to retail workers - 
                  we've helped thousands of people from all walks of life transition into 
                  fulfilling tech careers.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-8 sm:mb-12">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-200">
                  <div className="bg-purple-100 w-12 h-12 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center mb-4 sm:mb-6">
                    <Icon className="h-6 w-6 sm:h-8 sm:w-8 text-purple-600" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mb-12 sm:mb-16">
          <div className="bg-white rounded-3xl p-6 sm:p-8 lg:p-10 shadow-sm border border-gray-100">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-8 sm:mb-12">
              Our Impact in Numbers
            </h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl sm:text-4xl font-bold text-purple-600 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm sm:text-base text-gray-600 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-8 sm:mb-12">
            Meet the Team
          </h2>
          <p className="text-base sm:text-lg text-gray-600 text-center mb-8 sm:mb-12 max-w-2xl mx-auto">
            Our diverse team of educators, developers, and community builders are united by one mission: 
            helping you succeed in your tech journey.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 group text-center">
                <div className="relative mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover mx-auto mb-4 group-hover:scale-105 transition-transform"
                  />
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                    <div className="bg-purple-100 text-purple-600 px-3 py-1 rounded-full text-xs font-medium">
                      {member.role}
                    </div>
                  </div>
                </div>
                
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">
                  {member.name}
                </h3>
                
                <p className="text-sm sm:text-base text-gray-600 mb-4 leading-relaxed">
                  {member.bio}
                </p>

                <div className="bg-blue-50 rounded-xl p-3 mb-4">
                  <p className="text-xs sm:text-sm text-blue-800 italic">
                    <strong>Fun fact:</strong> {member.funFact}
                  </p>
                </div>

                <div className="flex justify-center space-x-3">
                  {member.social.linkedin && (
                    <a
                      href={member.social.linkedin}
                      className="bg-gray-100 hover:bg-purple-100 p-2 rounded-full transition-colors group/social"
                    >
                      <Linkedin className="h-4 w-4 text-gray-600 group-hover/social:text-purple-600" />
                    </a>
                  )}
                  {member.social.twitter && (
                    <a
                      href={member.social.twitter}
                      className="bg-gray-100 hover:bg-purple-100 p-2 rounded-full transition-colors group/social"
                    >
                      <Twitter className="h-4 w-4 text-gray-600 group-hover/social:text-purple-600" />
                    </a>
                  )}
                  {member.social.github && (
                    <a
                      href={member.social.github}
                      className="bg-gray-100 hover:bg-purple-100 p-2 rounded-full transition-colors group/social"
                    >
                      <Github className="h-4 w-4 text-gray-600 group-hover/social:text-purple-600" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-12 sm:mb-16">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl p-6 sm:p-8 lg:p-10 text-white text-center">
            <Award className="h-12 w-12 sm:h-16 sm:w-16 mx-auto mb-4 sm:mb-6" />
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">
              Why We're Different
            </h2>
            <div className="max-w-3xl mx-auto">
              <p className="text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">
                Unlike other coding bootcamps or online courses, we don't just teach you to code. 
                We teach you to think like a developer, work like a professional, and build the 
                confidence to succeed in your new career.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 text-sm sm:text-base">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                  <div className="font-semibold mb-2">100% Free to Start</div>
                  <div className="text-white/80">No upfront costs or hidden fees</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                  <div className="font-semibold mb-2">Real Mentorship</div>
                  <div className="text-white/80">Personal guidance from industry experts</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                  <div className="font-semibold mb-2">Proven Results</div>
                  <div className="text-white/80">Thousands of successful career changes</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <div className="bg-white rounded-3xl p-6 sm:p-8 lg:p-10 shadow-sm border border-purple-100">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">
              Ready to Start Your Journey?
            </h3>
            <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto">
              Join thousands of learners who have transformed their lives through CodeBridge. 
              Your future in tech is waiting.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/signup"
                className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full hover:shadow-xl transition-all duration-200 font-semibold text-base sm:text-lg"
              >
                Join Free Today
              </a>
              <a
                href="/community"
                className="border-2 border-purple-600 text-purple-600 px-6 sm:px-8 py-3 sm:py-4 rounded-full hover:bg-purple-50 transition-colors font-semibold text-base sm:text-lg"
              >
                Explore Community
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;