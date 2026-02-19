// 프로젝트 데이터 배열
var projects = [
    {
        title: '포트폴리오 웹사이트',
        description: '현대적이고 반응형 디자인의 개인 포트폴리오 웹사이트입니다. 다크/라이트 모드 전환 기능과 부드러운 애니메이션을 구현했습니다.',
        technologies: ['HTML', 'CSS', 'JavaScript']
    },
    {
        title: '할 일 관리 앱',
        description: '로컬 스토리지를 활용한 간단한 할 일 관리 애플리케이션입니다. 추가, 완료, 삭제 기능을 제공합니다.',
        technologies: ['HTML', 'CSS', 'JavaScript', 'LocalStorage']
    },
    {
        title: '날씨 정보 대시보드',
        description: '실시간 날씨 정보를 표시하는 대시보드입니다. OpenWeatherMap API를 연동하여 현재 날씨와 예보를 보여줍니다.',
        technologies: ['HTML', 'CSS', 'JavaScript', 'API']
    },
    {
        title: '반응형 랜딩 페이지',
        description: '모바일부터 데스크톱까지 완벽하게 대응하는 랜딩 페이지입니다. CSS Grid와 Flexbox를 활용한 레이아웃을 구현했습니다.',
        technologies: ['HTML', 'CSS', 'Responsive Design']
    }
];

// 프로젝트 카드를 동적으로 생성하는 함수
function renderProjects() {
    var container = document.getElementById('projects-container');
    if (!container) return;

    // 기존 내용 초기화
    container.innerHTML = '';

    // forEach를 사용하여 각 프로젝트 카드 생성
    projects.forEach(function(project) {
        // 카드 요소 생성
        var card = document.createElement('article');
        card.className = 'project-card';

        // 제목 생성
        var title = document.createElement('h3');
        title.textContent = project.title;

        // 설명 생성
        var description = document.createElement('p');
        description.textContent = project.description;

        // 기술 태그 컨테이너 생성
        var tagsContainer = document.createElement('div');
        tagsContainer.className = 'project-tags';

        // 기술 태그들을 forEach로 생성
        project.technologies.forEach(function(tech) {
            var tag = document.createElement('span');
            tag.className = 'project-tag';
            tag.textContent = tech;
            tagsContainer.appendChild(tag);
        });

        // 요소들을 카드에 추가
        card.appendChild(title);
        card.appendChild(description);
        card.appendChild(tagsContainer);

        // 카드를 컨테이너에 추가
        container.appendChild(card);
    });
}

// DOM이 로드된 후 프로젝트 렌더링
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', renderProjects);
} else {
    renderProjects();
}
